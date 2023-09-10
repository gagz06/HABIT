const habitSchema = require("../models/habitSchema");
const habitData = [];

module.exports.loadCalendar = async function (req, res) {
  try {
    // Query the MongoDB database for all habit records
    const allHabitList = await habitSchema.find({});
    for(habit of allHabitList){
      sortHabit(habit.statusEntries)
    }
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;
    // Render the calendar view
    return res.render("calendar", {
      title: "Habit Tracker System | HTS",
      habits: allHabitList,
      todayDate: today,
    });
  } catch (err) {
    console.log(err);
  }
};

function sortHabit(statusEntries) {
  statusEntries.sort((a, b) => new Date(a.date) - new Date(b.date));
}
