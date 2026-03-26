import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import ResetPasswordController from "../../controllers/Auth/ResetPassword.controller.js";

const router = express.Router();

/**
 * @openapi
 * /auth/reset-password:
 *   post:
 *     summary: Reset user password
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - Email
 *               - OldPassword
 *               - NewPassword
 *             properties:
 *               Email: { type: "string" }
 *               OldPassword: { type: "string" }
 *               NewPassword: { type: "string" }
 *     responses:
 *       200:
 *         description: Password reset successfully
 *       400:
 *         description: Failed to reset password
 */
router.post("/", asyncHandler(ResetPasswordController));

export default router;
