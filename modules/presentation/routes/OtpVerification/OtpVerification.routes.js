import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import OtpVerificationController from "../../controllers/OtpVerification/OtpVerification.controller.js";

const router = express.Router();

/**
 * @openapi
 * /otp-verification:
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
router.post("/", asyncHandler(OtpVerificationController));

export default router;
