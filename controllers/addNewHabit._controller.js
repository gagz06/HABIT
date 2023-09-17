// Import the 'habitSchema' model (assuming it's defined in "../models/habitSchema")
const habitSchema = require("../models/habitSchema");

// Get the current date and time in a specific format
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0"); // Day
var mm = String(today.getMonth() + 1).padStart(2, "0"); // Month (Note: January is 0)
var yyyy = today.getFullYear(); // Year
var minutes = today.getMinutes().toString().padStart(2, "0"); // Minutes
var hours = today.getHours().toString().padStart(2, "0"); // Hours
var time = hours + ":" + minutes; // Current time in HH:MM format
today = yyyy + "-" + mm + "-" + dd; // Current date in YYYY-MM-DD format

// Function to render the "addNewHabit" page
module.exports.addPageLoad = function (req, res) {
  try {
    return res.render("addNewHabit", {
      title: "Habit Tracker System | HTS",
      todayDate: today,
      todayTime: time,
    });
  } catch (err) {
    console.log(err);
  }
};

// Function to create a new habit and update its default status
module.exports.createNew = async function (req, res) {
  try {
    // Create a new habit using data from the request body
    let newHabit = await habitSchema.create({
      habitName: req.body.habit,
      userId: "testUser", // Assuming a default user ID
      time: req.body.time,
    });
    console.log(newHabit._id);

    // Create a new status entry with the current date and selected status
    const newStatusEntry = {
      date: today,
      status: req.body.HabitStatus,
    };

    // Add the new status entry to the habit's statusEntries array
    newHabit.statusEntries.push(newStatusEntry);

    // Save the updated habit document to the database
    newHabit
      .save()
      .then(() => {
        console.log("Habit default Status updated");
      })
      .catch(function (err) {
        console.log(err);
      });

    // Redirect back to the previous page
    return res.redirect("back");
  } catch (err) {
    console.log(err);
    return;
  }
};
