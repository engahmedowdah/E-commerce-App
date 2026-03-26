import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import ActiveUserByIDController from "../../controllers/User/ActiveUserByID.controller.js";

const router = express.Router();

/**
 * @openapi
 * /user/active:
 *   patch:
 *     summary: Activate a user by ID
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               UserID: { type: "string" }
 *     responses:
 *       200:
 *         description: User activated successfully
 *       400:
 *         description: Failed to activate user
 */
router.patch("/", asyncHandler(ActiveUserByIDController));

export default router;
