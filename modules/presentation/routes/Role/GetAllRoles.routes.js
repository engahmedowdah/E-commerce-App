import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import GetAllRolesController from "../../controllers/Role/GetAllRoles.controller.js";

const router = express.Router();

/**
 * @openapi
 * /roles:
 *   get:
 *     summary: Get all roles
 *     tags: [Role]
 *     responses:
 *       200:
 *         description: List of all roles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Role'
 */
router.get("/", asyncHandler(GetAllRolesController));

export default router;
