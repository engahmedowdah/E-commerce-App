import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import LoginController from "../../../controllers/Auth/Login.controller.js";
const router = express.Router();
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - Email
 *               - Password
 *             properties:
 *               Email: { type: "string", format: "email" }
 *               Password: { type: "string", format: "password" }
 *             example:
 *               Email: "user@kutuku.com"
 *               Password: "SecurePass123!"
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: "boolean" }
 *                 data: { $ref: '#/components/schemas/User' }
 *                 access_token: { type: "string" }
 *                 token_type: { type: "string" }
 *       400:
 *         description: Invalid credentials
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.post("/", asyncHandler(LoginController));
export default router;
