const mongoose = require("mongoose")
const Schema = mongoose.Schema

const logSchema = new Schema({
  exercise: {type: mongoose.Types.ObjectId, ref: "Exercises"},
  count: object.key(exercise).length,
})
module.exports = mongoose.model("Log", logSchema)