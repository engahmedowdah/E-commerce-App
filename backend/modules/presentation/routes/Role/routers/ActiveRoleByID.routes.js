import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import ActiveRoleByIDController from "../../../controllers/Role/ActiveRoleByID.controller.js";
const router = express.Router();
/**
 * @swagger
 * /role/active:
 *   patch:
 *     summary: Toggle active status of Role
 *     tags: [Roles]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - RoleID
 *             properties:
 *               RoleID:
 *                 type: string
 *                 description: The Role ID to toggle active status
 *             example:
 *               RoleID: "6535c90b3d7b3110acb4d24c"
 *     responses:
 *       200:
 *         description: Role active status toggled successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Role'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Role not found
 *       500:
 *         description: Internal server error
 */

router.patch("/", asyncHandler(ActiveRoleByIDController));
export default router;
