import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import VerifyOtpController from "../../../controllers/OtpVerification/VerifyOtp.controller.js";
const router = express.Router();
/**
 * @swagger
 * /otp-verification/verify:
 *   post:
 *     summary: Verify OTP code
 *     tags: [OTP Verification]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - UserID
 *               - Otp
 *             properties:
 *               UserID:
 *                 type: string
 *                 description: The user ID to verify OTP for
 *               Otp:
 *                 type: string
 *                 description: The OTP code
 *             example:
 *               UserID: "6535c90b3d7b3110acb4d24c"
 *               Otp: "123456"
 *     responses:
 *       200:
 *         description: OTP verified successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Invalid or expired OTP
 *       500:
 *         description: Internal server error
 */
router.post("/", asyncHandler(VerifyOtpController));
export default router;
