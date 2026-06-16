import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import OtpVerificationController from "../../../controllers/OtpVerification/OtpVerification.controller.js";
const router = express.Router();
/**
 * @swagger
 * /otp:
 *   post:
 *     summary: Send OTP verification code
 *     tags: [OTP Verification]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - Email
 *             properties:
 *               Email:
 *                 type: string
 *                 format: email
 *                 description: The email to send OTP to
 *             example:
 *               Email: "user@example.com"
 *     responses:
 *       200:
 *         description: OTP sent successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/", asyncHandler(OtpVerificationController));
export default router;
