// Import the 'habitSchema' model (assuming it's defined in "../models/habitSchema")
const habitSchema = require('../models/habitSchema');

// Get the current date in a specific format (YYYY-MM-DD)
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;

// Function to load the update status page
module.exports.updateStatusPageLoad = async function(req, res) {
    try {
        // Find the habit by ID
        let Habit = await habitSchema.findById(req.params.id);
        let statusForDate;

        // Check if a specific date is provided in the request parameters
        if (req.params.date) {
            today = req.params.date;
            const statusEntry = Habit.statusEntries.find(entry => entry.date === req.params.date);

            if (statusEntry) {
                statusForDate = statusEntry.status;
            }
        }

        // Render the update status view, passing data to the view
        return res.render("updateStatus", {
            title: "Habit Tracker System | HTS",
            habit: Habit,
            todayDate: today,
            statusForDate: statusForDate
        });
    } catch (err) {
        console.log(err);
        return;
    }
}

// Function to update the habit status
module.exports.updateStatus = async function(req, res) {
    try {
        // Find the habit by ID
        let Habit = await habitSchema.findById(req.params.id);
        const newDate = req.body.date;
        const dateExists = Habit.statusEntries.some((entry) => entry.date === newDate);
        const newTime = Habit.time;

        // Update the habit's time if it's different from the request
        if (newTime !== req.body.time) {
            Habit.time = req.body.time;
        }

        // Check if an entry for the given date already exists
        if (dateExists) {
            const existingEntry = Habit.statusEntries.find((entry) => entry.date === newDate);

            // Update the status if it's different from the request
            if (existingEntry.status !== req.body.HabitStatus) {
                existingEntry.status = req.body.HabitStatus;
            }
        } else {
            // Create a new status entry for the date
            const newStatusEntry = {
                date: req.body.date,
                status: req.body.HabitStatus
            };
            Habit.statusEntries.push(newStatusEntry);
        }

        // Save the updated habit document to the database
        Habit.save().then(() => {
            console.log('Status updated');
        }).catch((err) => {
            console.log(err);
        });

        // Redirect back to the previous page
        return res.redirect('back');
    } catch (error) {
        console.log(error);
    }
}
