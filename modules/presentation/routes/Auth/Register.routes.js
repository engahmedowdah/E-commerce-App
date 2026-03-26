import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import RegisterController from "../../controllers/Auth/Register.controller.js";

const router = express.Router();

/**
 * @openapi
 * /auth/register:
 *   post:
 *     summary: User registration
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
 *               - Password
 *               - ConfirmPassword
 *             properties:
 *               Email: { type: "string" }
 *               FirstName: { type: "string" }
 *               LastName: { type: "string" }
 *               Password: { type: "string" }
 *               ConfirmPassword: { type: "string" }
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Invalid input / Passwords do not match
 */
router.post("/", asyncHandler(RegisterController));

export default router;
