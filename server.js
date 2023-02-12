const express = require("express");
const app = express();

const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.json({ limit: "100000000" }));

const ConnectDB = require("./config/db");
ConnectDB();

const userRoutes = require("./routers/user");
const loanRoutes=require("./routers/loan")
const paymentRoutes=require("./routers/payment")
app.use(userRoutes);
app.use(loanRoutes)
app.use(paymentRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server on port ${PORT}`);
});
