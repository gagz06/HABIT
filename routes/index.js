const express = require('express');
const router = express.Router();

console.log('router loaded');

const homeController = require('../controllers/home_controller');
router.get('/',homeController.home);
router.get('/deleteHabit/:id',homeController.deleteHabit);

const loadCalendar = require('../controllers/calendar');
router.get('/calendar',loadCalendar.loadCalendar);

const addHabitController = require('../controllers/addHabit');
router.get('/addHabit',addHabitController.addNewHabit);
router.post('/createnewhabit',addHabitController.create);

const habitStatusUpdate = require('../controllers/habitStatusUpdate');
router.get('/status/:id',habitStatusUpdate.updateStatusPageLoad);
router.post('/habitStatusUpdate/:id',habitStatusUpdate.updateStatus);
router.get('/statusUpdate/:id/:date',habitStatusUpdate.updateStatusPageLoad);
//deleteHabit
module.exports = router;