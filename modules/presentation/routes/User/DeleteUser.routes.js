import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import DeleteUserController from "../../controllers/User/DeleteUser.controller.js";

const router = express.Router();

/**
 * @openapi
 * /user:
 *   delete:
 *     summary: Delete a user by ID
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
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 */
router.delete("/", asyncHandler(DeleteUserController));

export default router;
