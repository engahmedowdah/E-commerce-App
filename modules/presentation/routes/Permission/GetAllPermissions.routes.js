import express from "express";
import GetAllPermissions from "../../controllers/Permission/GetAllPermissions.controller.js";

const router = express.Router();

/**
 * @openapi
 * /permissions:
 *   get:
 *     summary: Get all permissions
 *     tags: [Permission]
 *     responses:
 *       200:
 *         description: List of permissions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Permission'
 */
router.get("/", GetAllPermissions);

export default router;
