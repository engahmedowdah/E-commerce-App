import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import UpdateAdminController from "../../controllers/Admin/UpdateAdmin.controller.js";

const router = express.Router();

/**
 * @openapi
 * /admin:
 *   put:
 *     summary: Update an admin by ID
 *     tags: [Admins]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               AdminID: { type: "string" }
 *               FirstName: { type: "string" }
 *               LastName: { type: "string" }
 *               Email: { type: "string" }
 *               RoleID: { type: "string" }
 *     responses:
 *       200:
 *         description: Admin updated successfully
 *       404:
 *         description: Admin not found
 */
router.put("/", asyncHandler(UpdateAdminController));

export default router;
