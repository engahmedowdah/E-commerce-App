import express from "express";
import GetPermissionByID from "../../controllers/Permission/GetPermissionByID.controller.js";

const router = express.Router();

/**
 * @openapi
 * /permission:
 *   get:
 *     summary: Get a permission by ID
 *     tags: [Permission]
 *     parameters:
 *       - in: query
 *         name: PermissionID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Permission fetched successfully
 *       404:
 *         description: Permission not found
 */
router.get("/", GetPermissionByID);

export default router;
