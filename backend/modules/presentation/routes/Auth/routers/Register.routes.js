import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import RegisterController from "../../../controllers/Auth/Register.controller.js";
const router = express.Router();
/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - Email
 *               - FirstName
 *               - LastName
 *               - Phone
 *               - Password
 *               - ConfirmPassword
 *             properties:
 *               Email: { type: "string", format: "email" }
 *               FirstName: { type: "string" }
 *               LastName: { type: "string" }
 *               Phone: { type: "string" }
 *               Password: { type: "string", format: "password" }
 *               ConfirmPassword: { type: "string", format: "password" }
 *             example:
 *               FirstName: "Ahmed"
 *               LastName: "Alghamdi"
 *               Email: "ahmed@kutuku.com"
 *               Password: "SecurePass123!"
 *               ConfirmPassword: "SecurePass123!"
 *               Phone: "+966512345678"
 *     responses:
 *       201:
 *         description: Registration successful
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
router.post("/", asyncHandler(RegisterController));
export default router;
