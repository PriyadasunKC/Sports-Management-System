const  express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// import the user model
const UserApplicationModel = require('./models/userApplication');
const UserApplicationTableModel = require('./models/userApplicationTable');



const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://adminsms:admin123@cluster0.3yvr8xj.mongodb.net/userApplicationModel"
);

const connection = mongoose.connection;
connection.once("open", function () {
  console.log("MongoDB database connected");
});

// API to access users
// req is the data we passing to the server
// res is the response we get from the server
// Using created model to access the database
app.get("/getUserApplicationData", async (req, res) => {
  UserApplicationModel.find({})
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.json(err);
    });
});

// API to add data to the database
app.post("/addUserApplicationData", async (req, res) => {
  UserApplicationModel.create(req.body)
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.error("Error:", err);
      res.status(400).json("Error: " + err);
    });
});

// API to access the userApplication Table Data
app.get("/getUserApplicationTableData", async (req, res) => {
  UserApplicationTableModel.find({})
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Create the server
app.listen(5000, () => {
    console.log('Server has started on port 5000');
});

