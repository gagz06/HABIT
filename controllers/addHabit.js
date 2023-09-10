const habitSchema = require("../models/habitSchema");
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + "-" + mm + "-" + dd;
module.exports.addNewHabit = function (req, res) {
  try {
    return res.render("addHabit", {
      title: "Habit Tracker System | HTS",
      todayDate: today
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports.create = async function (req, res) {
  try {
    let newHabit = await habitSchema.create({
      habitName: req.body.habit,
      userId: "testUser",
      time: req.body.time,
    });
    console.log(newHabit._id);
   
    const newStatusEntry = {
      date: today,
    };

    newHabit.statusEntries.push(newStatusEntry);
    newHabit
      .save()
      .then(() => {
        console.log("Habit default Status updated");
      })
      .catch(function (err) {
        console.log(err);
      });
    return res.redirect("back");
  } catch (err) {
    console.log(err);
    return;
  }
};
