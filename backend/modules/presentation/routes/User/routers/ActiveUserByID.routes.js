import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import ActiveUserByIDController from "../../../controllers/User/ActiveUserByID.controller.js";
const router = express.Router();
/**
 * @swagger
 * /user/active:
 *   patch:
 *     summary: Toggle active status of User
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - UserID
 *             properties:
 *               UserID:
 *                 type: string
 *                 description: The User ID to toggle active status
 *             example:
 *               UserID: "6535c90b3d7b3110acb4d24c"
 *     responses:
 *       200:
 *         description: User active status toggled successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *                 data:
 *                   $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */

router.patch("/", asyncHandler(ActiveUserByIDController));
export default router;
