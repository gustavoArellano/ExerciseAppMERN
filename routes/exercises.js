const router = require('express').Router();
// SETTING THE EXERCISES MODEL INTO THE "EXERCISE" VARIABLE
let Exercise = require('../models/exercise.model');

// FIRST ROUT GETS ALL OF THE EXERCISES FROM EXERCISES MODEL
router.route('/').get((req, res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
});

//ADD ROUTE
router.route('/add').post((req, res) => {
    // REQUESTS WHATS INPUTED FROM THE BODY INTO A VARIABLE
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    // CREATES NEW EXERCISE WITH THE GIVEN DATA RECIEVED FROM BODY
    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    });

    // SAVES THE EXERCISE TO THE MODEL
    newExercise.save() 
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error: ' + err))
});

// GET BY ID ROUTE
router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE BY ID ROUTE
router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// UPDATE ROUTE
router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date);

            exercise.save()
                .then(() => res.json('Exercise updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch( err =>  res.status(400).json('Error: ' + err));
})

module.exports = router
