const habitSchema = require("../models/habitSchema");

module.exports.addNewHabit = function (req, res) {
  try {
    let Habit = null;
    return res.render("addHabit", {
      title: "Habit Tracker System | HTS",
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
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;
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
    return res.redirect("/");
  } catch (err) {
    console.log(err);
    return;
  }
};
