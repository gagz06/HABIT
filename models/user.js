// Schema added for future referance
// Import the Mongoose library
const mongoose = require("mongoose");

// Define a schema for user data
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String, // Field to store the user's name
      unique: true, // Ensure that each user's name is unique
      required: true, // Require a name for each user
    },
    habits: [
      {
        type: mongoose.Schema.Types.ObjectId, // Define an array of ObjectIds, which will reference Habit documents
        ref: "habitSchema", // Reference the "habitSchema" model for the habit data
      },
    ],
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt timestamps to user documents
  }
);

// Create a Mongoose model named 'User' based on the 'userSchema'
const User = mongoose.model("User", userSchema);

// Export the 'User' model to make it available for use in other parts of the application
module.exports = User;
