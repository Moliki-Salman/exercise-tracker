const mongoose = require("mongoose")
const schema = mongoose.Schema

const exerciseSchema = newSchema({
  username: {type: mongoose.Types.ObjectId, ref: "Users"},
  description: "string",
  duration: "number",
  date: Date.toDateString(),
})
module.exports = mongoose.model("Exercises", exerciseSchema)