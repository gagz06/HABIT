# Habit Tracker Web Application

## Overview

This web application is a Habit Tracker system that helps users keep track of their daily habits and monitor their progress over time. Users can add new habits, update the status of each habit for specific dates, view a calendar showing their habit history, and see statistics like best streaks and total days.

## Project Structure

The project is organized as follows:

- **`/assets`**: Contains static assets like CSS and JavaScript files.
- **`/config`**: Configuration files, including database setup.
- **`/models`**: Defines the Mongoose schema for the application's data.
- **`/routes`**: Contains route handlers for different pages and actions.
- **`/views`**: Contains EJS templates for rendering pages.
- **`/js`**: Contains client-side JavaScript files for interactive features.
- **`README.md`**: This documentation file.

## Pages

### Home Page

- Displays a list of all habits.
- Shows the best streak and total days for each habit.
- Allows users to delete habits or update habit statuses.

### Calendar Page

- Shows a calendar view of habit statuses for the last 6 days.
- Users can click on specific dates to update habit statuses.

### Add New Habit Page

- Allows users to add a new habit with a name and time.

### Update Habit Status Page

- Allows users to update the status of a habit for a specific date and time.

## How to Run

1. Clone this repository to your local machine.
2. Install the required dependencies using `npm install`.
3. Start the server using `npm start`.
4. Access the application in your web browser at `http://localhost:8001` (or the specified port).

## Dependencies

- Express.js: Web application framework.
- Mongoose: Object Data Modeling (ODM) for MongoDB.
- EJS: Embedded JavaScript templates for rendering views.

## Author

- Gagandeep Singh Dahiya

## License

This project is licensed under the [MIT License](LICENSE).
