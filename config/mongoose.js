const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0/habit_Trackker_App');

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to db"));

db.once('open',function () {
    console.log('Conected to DB=> MongoDB');
});
module.exports=db;