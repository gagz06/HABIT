const habitSchema = require('../models/habitSchema');

module.exports.updateStatusPageLoad = async function(req,res){
    try{
        let Habit = await habitSchema.findById(req.params.id);
        return res.render("status",{
            title: "Habit Tracker System | HTS",
            habit: Habit
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


    if(dateExists){
        
    const existingEntry = Habit.statusEntries.find((entry) => entry.date === newDate);
    existingEntry.status = req.body.HabitStatus;
    await  Habit.save().then(()=>{
        console.log('Status updated');
      }).catch(()=>{
        console.log(err);
      });
    }
    else{
        const newStatusEntry = {
            date: req.body.date,
            status: req.body.HabitStatus
          };
          Habit.statusEntries.push(newStatusEntry);
          Habit.save().then(()=>{
            console.log('New Status added');
          }).catch(()=>{
            console.log(err);
          });
    }
      return res.redirect('back');
   } catch (error) {
    console.log(error);
   }
}
