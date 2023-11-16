// import mongoose
const mongoose = require('mongoose');

// Create the schema
const userApplicationSchema = new mongoose.Schema({
  // Define the fields in the schema
  fname: String,
  lname: String,
  email: String,
  age: Number,
  dob: String,
  experience: String,
  winningHistory: String,
}); 

// Create the model from the schema
const UserApplicationModel = mongoose.model(
  /*Collection Name ,schema name*/ "sm_system",
  userApplicationSchema
);

// Export the model
module.exports = UserApplicationModel;