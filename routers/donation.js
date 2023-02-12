const express = require("express");
const multer = require("multer");
const router = express.Router();

const {
  addDonation,
  getAllDonation,
  uploadDonationDoc,
  donationpayment,
} = require("../controllers/donation");
const auth = require("../auth/authentication");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "donation_docs");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, req.user.id + ".jpg");
  },
});

const upload = multer({ storage });
router.post("/adddonation", auth, addDonation);
router.get("/getalldonations", auth, getAllDonation);
router.post(
  "/uploaddonationdoc",
  auth,
  upload.single("donationdoc"),
  uploadDonationDoc
);
router.post("/donationpayment", auth, donationpayment);
module.exports = router;
