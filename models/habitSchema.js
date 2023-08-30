const mongoose = require('mongoose');

const statusEntrySchema = new mongoose.Schema({
  date: Date,
  status: {
    type: String,
    enum: ['Done', 'Not Done', 'None'],
    default: 'None',
  },
});

const habitSchema = new mongoose.Schema({
  habitName: String,
  userId: String, 
  time: String,
  statusEntries: [statusEntrySchema],
});

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;
