const userModel = require("../models/user-model")

const createUser = async (req, res) => {
  try {
    const user =  await userModel.create(req.body);
    res.status(200).json({ user, message: "user created successfully"})
  } catch (error) {
    res.status(500).json({ error: error.message})
  }
}

module.exports = { createUser }