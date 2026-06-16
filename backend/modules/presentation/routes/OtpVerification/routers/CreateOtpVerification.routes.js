import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import CreateOtpVerificationController from "../../../controllers/OtpVerification/CreateOtpVerification.controller.js";
const router = express.Router();
/**
 * @swagger
 * /otp-verification:
 *   post:
 *     summary: Create OTP verification record
 *     tags: [OTP Verification]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - UserID
 *               - ExpiresAt
 *               - Otp
 *             properties:
 *               UserID:
 *                 type: string
 *                 description: The user ID to create OTP for
 *               ExpiresAt:
 *                 type: string
 *                 description: The expiry date-time of the OTP
 *               Otp:
 *                 type: string
 *                 description: The OTP code
 *             example:
 *               UserID: "6535c90b3d7b3110acb4d24c"
 *               ExpiresAt: "2026-06-05T12:00:00Z"
 *               Otp: "123456"
 *     responses:
 *       201:
 *         description: OTP verification created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/", asyncHandler(CreateOtpVerificationController));
export default router;
