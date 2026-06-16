import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import CreateRoleController from "../../../controllers/Role/CreateRole.controller.js";
const router = express.Router();
/**
 * @swagger
 * /role:
 *   post:
 *     summary: Create a new Role
 *     tags: [Roles]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Role'
 *             example:
 *               Name: "Editor"
 *               Description: "Can manage content and products"
 *     responses:
 *       201:
 *         description: Role created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *                 data:
 *                   $ref: '#/components/schemas/Role'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

router.post("/", asyncHandler(CreateRoleController));
export default router;
