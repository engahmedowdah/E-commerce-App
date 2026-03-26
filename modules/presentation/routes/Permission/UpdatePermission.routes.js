import express from "express";
import UpdatePermission from "../../controllers/Permission/UpdatePermission.controller.js";

const router = express.Router();

/**
 * @openapi
 * /permission:
 *   put:
 *     summary: Update a permission by ID
 *     tags: [Permission]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               PermissionID: { type: "string" }
 *               Name: { type: "string" }
 *               Description: { type: "string" }
 *     responses:
 *       200:
 *         description: Permission updated successfully
 *       400:
 *         description: Failed to update permission
 */
router.put("/", UpdatePermission);

export default router;
