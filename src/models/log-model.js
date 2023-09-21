const mongoose = require("mongoose")
const { object } = require("webidl-conversions")
const schema = mongoose.Schema

const logSchema = newSchema({
  exercise: {type: mongoose.Types.ObjectId, ref: "Exercises"},
  count: object.key(exercise).length,
})
module.exports = mongoose.model("Log", logSchema)