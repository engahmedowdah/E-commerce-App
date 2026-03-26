import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import VerifyOtpController from "../../controllers/OtpVerification/VerifyOtp.controller.js";

const router = express.Router();

/**
 * @openapi
 * /otp-verification/verify:
 *   post:
 *     summary: Verify OTP code
 *     tags: [OtpVerification]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Email: { type: "string" }
 *               Phone: { type: "string" }
 *               Code: { type: "string" }
 *     responses:
 *       200:
 *         description: OTP verified successfully
 *       400:
 *         description: Invalid OTP code
 */
router.post("/", asyncHandler(VerifyOtpController));

export default router;
