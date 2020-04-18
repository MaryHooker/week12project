//Create entry point
let express = require('express');
let app = express();
let portNumber = 8000;

// CONNECTING TO A MONGO DATABASE
// reference the mongoose module 
let mongoose = require('mongoose');
// connect to database
let mongoDB = 'mongodb+srv://Student:C0d3Cr3w@cluster0-p8fhv.mongodb.net/cs_database?retryWrites=true&w=majority'
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
// connection error message
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//import and mount route
let api = require('./routes/api');
app.use('/api',api);

//listener
app.listen(portNumber,()=>{
    console.log(`Listening on port ${portNumber}`)
})

