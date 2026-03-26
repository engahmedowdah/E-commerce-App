import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import DeleteAdminController from "../../controllers/Admin/DeleteAdmin.controller.js";

const router = express.Router();

/**
 * @openapi
 * /admin:
 *   delete:
 *     summary: Delete an admin by ID
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
 *         description: Admin deleted successfully
 *       400:
 *         description: Failed to delete admin
 */
router.delete("/", asyncHandler(DeleteAdminController));

export default router;
