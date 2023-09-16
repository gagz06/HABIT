const habitSchema = require('../models/habitSchema');
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;
module.exports.updateStatusPageLoad = async function(req,res){
    try{
        let Habit = await habitSchema.findById(req.params.id);
        let statusForDate;
        if(req.params.date){
          today=req.params.date;
          const statusEntry = Habit.statusEntries.find(entry => entry.date === req.params.date);
          if (statusEntry) {
            statusForDate = statusEntry.status;
          }
        }
        return res.render("status",{
            title: "Habit Tracker System | HTS",
            habit: Habit,
            todayDate: today,
            statusForDate: statusForDate
        });
    }
    catch(err){
        console.log(err);
        return;
    }
}

module.exports.updateStatus= async function(req,res) {
   try {
    // console.log(req.body.date);
    // console.log(req.params.id);
    let Habit = await habitSchema.findById(req.params.id);
    const newDate = req.body.date;
    const dateExists = Habit.statusEntries.some((entry) => entry.date === newDate);

    const newTime= Habit.time;
    if(newTime!==req.body.time){
      Habit.time=req.body.time;
    }

    if(dateExists){
        
    const existingEntry = Habit.statusEntries.find((entry) => entry.date === newDate);
    if(existingEntry.status !== req.body.HabitStatus){
      existingEntry.status = req.body.HabitStatus;
    }
    }
    else{
        const newStatusEntry = {
            date: req.body.date,
            status: req.body.HabitStatus
          };
          Habit.statusEntries.push(newStatusEntry);
    }
    Habit.save().then(()=>{
      console.log('Status updated');
    }).catch((err)=>{
      console.log(err);
    });
      return res.redirect('back');
   } catch (error) {
    console.log(error);
   }
}
