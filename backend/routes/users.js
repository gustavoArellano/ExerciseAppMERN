const router = require('express').Router();
// SETTING THE USERS MODEL INTO THE "USER" VARIABLE
let User = require('../models/user.model');

// FIRST ROUTE GETS ALL OF THE USERS FROM USERS MODEL
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch( err => res.status(400).json('Error: ' + err));
});

// CREATES NEW USER USING POST REQUEST
router.route('/add').post((req, res) => {
    // REQUESTS WHATS INPUTED FROM THE BODY INTO VARIABLE
    const username = req.body.username;

    // CREATES NEW USER INSTANCE WITH THE GIVEN DATA FROM BODY
    const newUser = new User({username});

    // SAVES USER TO MODEL
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error ' + err));
});

module.exports = router