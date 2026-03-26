import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import ActiveRoleByIDController from "../../controllers/Role/ActiveRoleByID.controller.js";

const router = express.Router();

/**
 * @openapi
 * /role/active:
 *   patch:
 *     summary: Activate a role by ID
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
 *         description: Role activated successfully
 *       400:
 *         description: Failed to activate role
 */
router.patch("/", asyncHandler(ActiveRoleByIDController));

export default router;
