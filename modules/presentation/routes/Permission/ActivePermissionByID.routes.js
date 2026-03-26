import express from "express";
import ActivePermissionByID from "../../controllers/Permission/ActivePermissionByID.controller.js";

const router = express.Router();

/**
 * @openapi
 * /permission/active:
 *   patch:
 *     summary: Activate a permission by ID
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
 *         description: Permission activated successfully
 *       400:
 *         description: Failed to activate permission
 */
router.patch("/", ActivePermissionByID);

export default router;
