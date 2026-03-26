import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import UpdateRoleController from "../../controllers/Role/UpdateRole.controller.js";

const router = express.Router();

/**
 * @openapi
 * /role:
 *   put:
 *     summary: Update a role by ID
 *     tags: [Role]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               RoleID: { type: "string" }
 *               Name: { type: "string" }
 *               Description: { type: "string" }
 *     responses:
 *       200:
 *         description: Role updated successfully
 *       400:
 *         description: Failed to update role
 */
router.put("/", asyncHandler(UpdateRoleController));

export default router;
