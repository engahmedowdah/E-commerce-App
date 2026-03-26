import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import UpdateUserController from "../../controllers/User/UpdateUser.controller.js";

const router = express.Router();

/**
 * @openapi
 * /user:
 *   put:
 *     summary: Update a user by ID
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               UserID: { type: "string" }
 *               FirstName: { type: "string" }
 *               LastName: { type: "string" }
 *               Email: { type: "string" }
 *     responses:
 *       200:
 *         description: User updated successfully
 *       404:
 *         description: User not found
 */
router.put("/", asyncHandler(UpdateUserController));

export default router;
