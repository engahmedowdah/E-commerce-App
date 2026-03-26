import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import DeleteRoleController from "../../controllers/Role/DeleteRole.controller.js";

const router = express.Router();

/**
 * @openapi
 * /role:
 *   delete:
 *     summary: Delete a role by ID
 *     tags: [Role]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               RoleID: { type: "string" }
 *     responses:
 *       200:
 *         description: Role deleted successfully
 *       400:
 *         description: Failed to delete role
 */
router.delete("/", asyncHandler(DeleteRoleController));

export default router;