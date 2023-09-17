// Import the 'habitSchema' model (assuming it's defined in "../models/habitSchema")
const habitSchema = require("../models/habitSchema");

// Function to load and render the calendar page
module.exports.loadCalendar = async function (req, res) {
  try {
    // Query the MongoDB database for all habit records
    const allHabitList = await habitSchema.find({});

    // Sort the status entries for each habit by date
    for (habit of allHabitList) {
      sortHabit(habit.statusEntries);
    }

    // Get the current date in a specific format (YYYY-MM-DD)
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0"); // Day
    var mm = String(today.getMonth() + 1).padStart(2, "0"); // Month (Note: January is 0)
    var yyyy = today.getFullYear(); // Year
    today = yyyy + "-" + mm + "-" + dd; // Current date in YYYY-MM-DD format

    // Render the calendar view, passing data to the view
    return res.render("calendar", {
      title: "Habit Tracker System | HTS",
      habits: allHabitList, // All habit data
      todayDate: today, // Current date
    });
  } catch (err) {
    console.log(err);
  }
};

// Function to sort habit status entries by date
function sortHabit(statusEntries) {
  statusEntries.sort((a, b) => new Date(a.date) - new Date(b.date));
}
