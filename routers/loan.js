const express = require("express");
const auth = require("../auth/authentication");
const router = express.Router();
const {createLoan,getPendingRequests,updateStatus,lenderHistory,borrowersHistory,repay,amountBreakDown}=require("../controllers/loan")

router.post("/loan/request",auth,createLoan)
router.get("/loan/pendingRequests",auth,getPendingRequests)
router.patch("/loan/acceptRequest",auth,updateStatus)
router.get("/loan/lenderHistory",auth,lenderHistory)
router.get("/loan/borrowerHistory",auth,borrowersHistory)
router.post("/loan/repay",auth,repay)
router.post("/loan/amountbreakdown",auth,amountBreakDown)

module.exports=router