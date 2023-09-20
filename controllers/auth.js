const User = require("../models/user");

exports.registerPatient = async (req, res, next) => {
  try {
    const { email, password, name, gender, age, aadharNumber } = req.body;

    const user = await User.findOne({ email: email, isDoctor: false });

    if (user) {
      return res.status(400).json({
        message: "User with that email already exists!",
      });
    }

    const newUser = await User.create({
      name,
      email,
      gender,
      password,
      age,
      isDoctor: false,
      aadharNumber,
    });

    return res.status(200).json({
      message: "User successfully created Please login!",
    });
  } catch {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

exports.loginPatient = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email, isDoctor: false });

    if (!user) {
      return res.status(400).json({
        message: "user does not exist",
      });
    }

    if (password !== user.password) {
      return res.status(400).json({
        message: "please enter the correct password",
      });
    }

    return res.status(200).json({
      message: "success",
      user: user,
    });
  } catch {

  }
};



