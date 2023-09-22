const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");

const connectToDB = mongoose.connect('mongodb://127.0.0.1:27017/ExerciceTracker')
.then(() => {
  console.log("Connected to mongoBD database")
})

const userRouter = require("./routes/user-route")

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use("/", userRouter)

app.listen(5000, () => {
  console.log("Server is running on Port 5000")
})

module.exports = app