const userModel = require("../models/userModel")

async function userDetailsController(req, res) {
  try {
    console.log("userId", res.userId)
    const user = await userModel.findById(req.userId)
    res.status(200).json({
      data: user,
      error: false,
      success: true,
      message: "user Detail"
    })
    console.log("user", user)
  }
  catch (err) {
    res.status(400).json({
      message: err.message || err,
      err: true,
      success: false
    })
  }
}

module.exports = userDetailsController