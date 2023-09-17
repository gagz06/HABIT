// Import the 'habitSchema' model (assuming it's defined in "../models/habitSchema")
const habitSchema = require('../models/habitSchema');

// Function to load the home page and render habit data
module.exports.home = async function(req, res) {
    try {
        // Query the MongoDB database for all habit records
        let allHabitList = await habitSchema.find({});
        let bestStreaks = [];
        let totalDays = [];

        // Calculate the best streaks and total days for each habit
        for (habit of allHabitList) {
            const Streak = calculateDoneDays(habit.statusEntries);
            const count = habit.statusEntries.length;
            bestStreaks.push(Streak);
            totalDays.push(count);
        }

        // Render the home view, passing data to the view
        return res.render("home", {
            title: "Habit Tracker System | HTS",
            allHabitList: allHabitList,
            bestStreaks: bestStreaks,
            totalDays: totalDays
        });
    } catch (err) {
        console.log('Error', err);
        return;
    }
}

// Function to calculate the best streak for a habit
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

// Function to delete a habit
module.exports.deleteHabit = async function(req, res) {
    try {
        // Find the habit by ID
        let habit = await habitSchema.findById(req.params.id);

        // Delete the habit
        await habitSchema.deleteOne(habit._id).then(() => {
            console.log(habit.habitName + ' deleted successfully');
            return res.redirect('back');
        }).catch((err) => {
            console.log(err);
        });
    } catch (error) {
        console.log(error);
    }
}
