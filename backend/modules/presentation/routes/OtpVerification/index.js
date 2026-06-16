import express from "express";
import CreateOtpVerification from "./routers/CreateOtpVerification.routes.js";
import VerifyOtp from "./routers/VerifyOtp.routes.js";
const otp = express.Router();
otp.use("/", CreateOtpVerification);
otp.use("/verify", VerifyOtp);
export { otp };
