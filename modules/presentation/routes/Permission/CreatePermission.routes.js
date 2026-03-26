import express from "express";
import CreatePermission from "../../controllers/Permission/CreatePermission.controller.js";

const router = express.Router();

/**
 * @openapi
 * /permission:
 *   post:
 *     summary: Create a new permission
 *     tags: [Permission]
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
 *         description: Permission created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/", CreatePermission);

export default router;