const express = require('express');
// BODY PARSER NOW AVAILALBE WITHIN EXPRESS, NO LONG NEED TO REQUIRE
// const bodyParser = require('body-parser');
const cors = require('cors');
// MONGOOSE IS REQUIRED TO HELP CONNECT THE DATABASE TO THE SERVER
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());

// GRAPPING THE ATLAS_URI FROM ENV FILE CONTAINING KEY
// const uri = process.env.ATLAS_URI;
// CONNECTS THE DATABASE, ALONG WITH PARSER AND INDEX AS TRUE
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

// ESTABLISHES CONNECTION, NOTE ALWAYS CHECK IP IS UPDATED IN THE MONGO SITE
const connection = mongoose.connection; 
connection.once('open', () => {
    console.log("MongoDB databse connection established succcesfully");
});

// ONCE MODELS ARE CREATED, NEED TO REQUIRE THEM HERE IN THE SERVER
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

// WHEN SOMEONE GOES TO "/EXERCISES" OR "/USERS" URL IT WILL LOAD EVERYTING THATS IN THE ROUTERS
// AFTER REQUIREING MODELS, TELL SERVER TO USE THEM
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

// WHEN IN DEPLOYING, ADD THE BELOW
if (process.env.NODE_ENV === 'production') {
    app.use((express.static('frontend/build')))
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});