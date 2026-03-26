import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import GetRoleByIDController from "../../controllers/Role/GetRoleByID.controller.js";

const router = express.Router();

/**
 * @openapi
 * /role:
 *   get:
 *     summary: Get a role by ID
 *     tags: [Role]
 *     parameters:
 *       - in: query
 *         name: RoleID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Role fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Role'
 *       404:
 *         description: Role not found
 */
router.get("/", asyncHandler(GetRoleByIDController));

export default router;
