const mongoose = require("mongoose")
const schema = mongoose.Schema

const userSchema = newSchema({
  username: "string",
})
module.exports = mongoose.model("Users", userSchema)