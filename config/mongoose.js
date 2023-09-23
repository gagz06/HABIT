require("dotenv").config();
// Import the Mongoose library for MongoDB interaction
const mongoose = require('mongoose');

// Connect to the MongoDB database using the specified URL ('mongodb://0.0.0.0/habit_Trackker_App')
//mongoose.connect('mongodb://0.0.0.0/habit_Trackker_App');
mongoose.connect(process.env.MONGODB_CONNECT_URI);
// Get a reference to the database connection
const db = mongoose.connection;

// Event handler for database connection errors
db.on('error', console.error.bind(console, "Error connecting to db"));

// Event handler for successful database connection
db.once('open', function () {
    console.log('Connected to DB => MongoDB');
});

// Export the Mongoose connection for use in other parts of the application
module.exports = db;
