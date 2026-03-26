import express from "express";
import GetAdminByIDController from "../../controllers/Admin/GetAdminByID.controller.js";

const router = express.Router();

/**
 * @openapi
 * /admin:
 *   get:
 *     summary: Get an admin by ID
 *     tags: [Admins]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               AdminID: { type: "string" }
 *     responses:
 *       200:
 *         description: Admin fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Admin'
 *       404:
 *         description: Admin not found
 */
router.get("/", GetAdminByIDController);

export default router;
