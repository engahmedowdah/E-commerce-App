import express from "express";
import DeletePermission from "../../controllers/Permission/DeletePermission.controller.js";

const router = express.Router();

/**
 * @openapi
 * /permission:
 *   delete:
 *     summary: Delete a permission by ID
 *     tags: [Permission]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               PermissionID: { type: "string" }
 *     responses:
 *       200:
 *         description: Permission deleted successfully
 *       400:
 *         description: Failed to delete permission
 */
router.delete("/", DeletePermission);

export default router;
