import express from "express";
import ActivePermissionByID from "../../../controllers/Permission/ActivePermissionByID.controller.js";
const router = express.Router();
/**
 * @swagger
 * /permission/active:
 *   patch:
 *     summary: Toggle active status of Permission
 *     tags: [Permissions]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - PermissionID
 *             properties:
 *               PermissionID:
 *                 type: string
 *                 description: The Permission ID to toggle active status
 *             example:
 *               PermissionID: "6535c90b3d7b3110acb4d24c"
 *     responses:
 *       200:
 *         description: Permission active status toggled successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Permission'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Permission not found
 *       500:
 *         description: Internal server error
 */

router.patch("/", ActivePermissionByID);
export default router;
