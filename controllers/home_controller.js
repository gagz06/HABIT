const habitSchema = require('../models/habitSchema');
module.exports.home = async function(req,res){
    try{
        let allHabitList = await habitSchema.find({});
        return res.render("home",{
            title: "Habit Tracker System | HTS",
            allHabitList: allHabitList
        });
    }
    catch (err) {
        console.log('Error',err);
        return;
    }
}