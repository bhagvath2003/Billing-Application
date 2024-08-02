const adminModel = require("../models/admin/adminModel");

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await adminModel.findOne({
      email: email,
      password: password,
    });
    if (existingUser) {
      return res.status(200).json({ message: "admin successfully login" });
    }
    return res.status(404).json({message:"admin not exist"})
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};


module.exports = login;
