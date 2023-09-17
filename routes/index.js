// Import the necessary modules and set up an Express router
const express = require('express');
const router = express.Router();

// Log a message to the console indicating that the router has been loaded
console.log('router loaded');

// Import home_controller module and define routes for the home page
const homeController = require('../controllers/home_controller');
router.get('/', homeController.home);
router.get('/deleteHabit/:id', homeController.deleteHabit);

// Import calendar_controller module and define a route for the calendar page
const calendarController = require('../controllers/calendar_controller');
router.get('/calendar', calendarController.loadCalendar);

// Import addNewHabit_controller module and define routes for adding new habits
const addNewHabitController = require('../controllers/addNewHabit._controller');
router.get('/addNewHabitPage', addNewHabitController.addPageLoad);
router.post('/createnewhabit', addNewHabitController.createNew);

// Import updateStatus_controller module and define routes for updating habit statuses
const habitStatusUpdate = require('../controllers/updateStatus_controller');
router.get('/status/:id', habitStatusUpdate.updateStatusPageLoad);
router.get('/statusUpdate/:id/:date', habitStatusUpdate.updateStatusPageLoad);
router.post('/habitStatusUpdate/:id', habitStatusUpdate.updateStatus);

// Export the router for use in other parts of the application
module.exports = router;
