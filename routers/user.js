const express = require("express");
const router = express.Router();
const { signUp, updateProfile } = require("../controllers/user");
const auth = require("../auth/authentication");

router.post("/user/signup", signUp);
router.patch("/updateprofile", auth, updateProfile);
module.exports = router;
