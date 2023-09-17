// Import required modules
const express = require('express'); // Import Express for creating the server
const bodyParser = require('body-parser'); // Import body-parser for handling request data

// Create an Express application instance
const app = express();

// Define the port where the server will listen
const port = 8001;

// Connect to the database using Mongoose (assuming it's set up in './config/mongoose')
const db = require('./config/mongoose');

// Middleware to parse URL-encoded data (for processing form data)
app.use(express.urlencoded());

// Serve static files from the 'assets' directory (e.g., CSS, JavaScript files)
app.use(express.static('./assets'));

// Use routes defined in './routes' for handling incoming HTTP requests
app.use('/', require('./routes'));

// Set the view engine to EJS (assuming EJS is being used for rendering views)
app.set('view engine', 'ejs');

// Set the directory where views/templates are located
app.set('views', './views');

// Start the server and listen on the defined port
app.listen(port, function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Server running on port', port);
});
