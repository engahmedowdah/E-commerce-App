import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import ActiveAdminByIDController from "../../controllers/Admin/ActiveAdminByID.controller.js";

const router = express.Router();

/**
 * @openapi
 * /admin/active:
 *   patch:
 *     summary: Activate an admin by ID
 *     tags: [Admins]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               AdminID:
 *                 type: string
 *     responses:
 *       200:
 *         description: Admin activated successfully
 *       400:
 *         description: Failed to activate admin
 */
router.patch("/", asyncHandler(ActiveAdminByIDController));

export default router;
