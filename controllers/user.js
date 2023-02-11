const User = require("../models/user.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

dotenv.config();

const signUp = async (req, res, next) => {
  try {
    let { name, phoneNumber, email, password } = req.body;
    password = await bcrypt.hash(password, 12);
    const user = await User.create({
      name,
      email,
      phoneNumber,
      password,
    });
    const token = jwt.sign(
      { email: user.email, id: user.id },
      process.env.secret
    );
    res.status(201).json({ success: true, userInfo: user, token: token });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Something went wrong", error: error });
  }
};

const updateProfile = async (req, res, next) => {
  try {
    console.log(req.body);
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 12);
    }
    console.log(req.user);
    const user = await User.findByIdAndUpdate(req.user.id, req.body, {
      new: true,
    });
    console.log(user);
    res.status(200).json({ success: true, userInfo: user });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Something went wrong", error: error });
  }
};

module.exports = {
  signUp,
  updateProfile,
};
