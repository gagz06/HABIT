const habitSchema = require('../models/habitSchema');
module.exports.home = async function(req,res){
    try{
        let allHabitList = await habitSchema.find({});
        let bestStreaks=[];
        let totalDays=[];
        for(habit of allHabitList){
        const Streak= calculateDoneDays(habit.statusEntries);
        const count = habit.statusEntries.length;
        bestStreaks.push(Streak);
        totalDays.push(count);
        
    }
        return res.render("home",{
            title: "Habit Tracker System | HTS",
            allHabitList: allHabitList,
            bestStreaks: bestStreaks,
            totalDays: totalDays
        });
    }
    catch (err) {
        console.log('Error',err);
        return;
    }
}

function calculateDoneDays(statusEntries) {
    statusEntries.sort((a, b) => new Date(a.date) - new Date(b.date));
    let currentStreak = 0;
    let longestStreak = 0;
    for (const entry of statusEntries) {
        if (entry.status === 'Done') {
          // Increase the current streak
          currentStreak++;
        } else {
          // Reset the streak if status is not 'Done'
          currentStreak = 0;
        }
    
        // Update the longest streak if needed
        if (currentStreak > longestStreak) {
          longestStreak = currentStreak;
        }
      }
    
      return longestStreak;
}

module.exports.deleteHabit = async function(req,res){
    try {
        let habit = await habitSchema.findById(req.params.id);
        await habitSchema.deleteOne(habit._id).then(()=>{
            console.log(habit.habitName+'deleted successfully');
            return res.redirect('back');
        }).catch((err)=>{
            console.log(err);    
        });
    } catch (error) {
        console.log(error);
    }
}