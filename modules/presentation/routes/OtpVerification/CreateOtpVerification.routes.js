import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import CreateOtpVerificationController from "../../controllers/OtpVerification/CreateOtpVerification.controller.js";

const router = express.Router();

/**
 * @openapi
 * /otp-verification:
 *   post:
 *     summary: Create a new OTP verification
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
 *       201:
 *         description: OTP verification created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/", asyncHandler(CreateOtpVerificationController));

export default router;
