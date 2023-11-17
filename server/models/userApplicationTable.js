// import mongoose
const mongoose = require("mongoose");

// Create the schema
const userApplicationTableSchema = new mongoose.Schema({
  // Define the fields in the schema
  uid : String,
  fname: String,
  lname: String,
  location: String,
  userRole: String,
});

// Create the model from the schema
const UserApplicationTableModel = mongoose.model(
  /*Collection Name ,schema name*/ "sm_system_table",userApplicationTableSchema);

// Export the model
module.exports = UserApplicationTableModel;
