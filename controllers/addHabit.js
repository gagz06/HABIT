const habitSchema = require('../models/habitSchema');

module.exports.addNewHabit=  function(req,res){
    try{
        return res.render("addHabit",{
            title: "Habit Tracker System | HTS"
        });
    }
    catch(err){
        console.log(err);
    }
}

module.exports.create = async function (req,res) {
    try{
       let newHabit = await habitSchema.create({
        habitName: req.body.habit,
        userId: 'testUser',
        time: req.body.time
       });
       console.log(newHabit);
       return res.redirect("back");
    }
    catch(err){
        console.log(err);
    }
}