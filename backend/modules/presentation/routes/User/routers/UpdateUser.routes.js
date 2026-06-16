import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import UpdateUserController from "../../../controllers/User/UpdateUser.controller.js";
const router = express.Router();
/**
 * @swagger
 * /user:
 *   put:
 *     summary: Update User
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "6535c90b3d7b3110acb4d24c"
 *         description: The User ID to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               UserID: { type: string }
 *               IsActivated: { type: boolean }
 *               Email: { type: string }
 *               FirstName: { type: string }
 *               LastName: { type: string }
 *               Password: { type: string }
 *               ConfirmPassword: { type: string }
 *               Phone: { type: string }
 *             example:
 *               UserID: "example-user-id"
 *               IsActivated: true
 *               Email: "example-email@example.com"
 *               FirstName: "Example"
 *               LastName: "User"
 *               Password: "example-password"
 *               ConfirmPassword: "example-password"
 *               Phone: "example-phone"
 *     responses:
 *       200:
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *                 data:
 *                   $ref: '#/components/schemas/User'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */

router.put("/", asyncHandler(UpdateUserController));
export default router;
