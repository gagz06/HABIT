// Import the Mongoose library
const mongoose = require('mongoose');

// Define the schema for a status entry
const statusEntrySchema = new mongoose.Schema({
  date: String, // Stores the date of the status entry
  status: {
    type: String,
    enum: ['Done', 'Not Done', 'None'], // Allows only these three values for status
    default: 'None', // Sets 'None' as the default status
  },
});

// Define the schema for a habit
const habitSchema = new mongoose.Schema({
  habitName: String, // Stores the name of the habit
  userId: String, // Stores the user ID associated with the habit
  time: String, // Stores the time associated with the habit
  statusEntries: [statusEntrySchema], // An array of status entries for the habit
});

// Create a Mongoose model named 'Habit' based on the 'habitSchema'
const Habit = mongoose.model('Habit', habitSchema);

// Export the 'Habit' model to make it available for use in other parts of the application
module.exports = Habit;
