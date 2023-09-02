const Habit = require('../models/habitSchema');

// Assuming you have a habitId, date, and status from the user's input
Habit.findById(habitId, (err, habit) => {
  if (err) {
    // Handle error
    return;
  }

  const newStatusEntry = {
    date: date,
    status: status,
  };

  habit.statusEntries.push(newStatusEntry);

  habit.save((err) => {
    if (err) {
      // Handle error
      return;
    }

    // Status entry added successfully
    // You can redirect or send a response here
  });
});
