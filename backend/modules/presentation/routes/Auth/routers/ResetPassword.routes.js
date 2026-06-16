import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import ResetPasswordController from "../../../controllers/Auth/ResetPassword.controller.js";
const router = express.Router();
/**
 * @swagger
 * /auth/reset-password:
 *   post:
 *     summary: Reset password
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
 *               Email: { type: "string", format: "email" }
 *               OldPassword: { type: "string", format: "password" }
 *               NewPassword: { type: "string", format: "password" }
 *             example:
 *               Email: "user@kutuku.com"
 *               OldPassword: "OldPass123!"
 *               NewPassword: "NewSecurePass456!"
 *     responses:
 *       200:
 *         description: Password reset successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: "boolean" }
 *                 message: { type: "string" }
 *                 data: { $ref: '#/components/schemas/User' }
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/", asyncHandler(ResetPasswordController));
export default router;
