const mongoose = require("mongoose")
const Schema = mongoose.Schema

const exerciseSchema = new Schema({
  username: {type: mongoose.Types.ObjectId, ref: "Users"},
  description: "string",
  duration: "number",
  date: Date.toDateString(),
})
module.exports = mongoose.model("Exercises", exerciseSchema)