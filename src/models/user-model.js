const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
  username: "string",
}
)
module.exports = mongoose.model("Users", userSchema)