import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import CreateRoleController from "../../controllers/Role/CreateRole.controller.js";

const router = express.Router();

/**
 * @openapi
 * /role:
 *   post:
 *     summary: Create a new role
 *     tags: [Role]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Name: { type: "string" }
 *               Description: { type: "string" }
 *     responses:
 *       201:
 *         description: Role created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/", asyncHandler(CreateRoleController));

export default router;
