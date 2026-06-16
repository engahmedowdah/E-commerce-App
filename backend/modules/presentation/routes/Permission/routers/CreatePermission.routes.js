import express from "express";
import CreatePermission from "../../../controllers/Permission/CreatePermission.controller.js";
const router = express.Router();
/**
 * @swagger
 * /permission:
 *   post:
 *     summary: Create a new Permission
 *     tags: [Permissions]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Permission'
 *             example:
 *               Name: "manage_products"
 *               Description: "Permission to create, update, and delete products"
 *               RoleID: "6535c90b3d7b3110acb4d24c"
 *     responses:
 *       201:
 *         description: Permission created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *                 data:
 *                   $ref: '#/components/schemas/Permission'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

router.post("/", CreatePermission);
export default router;
