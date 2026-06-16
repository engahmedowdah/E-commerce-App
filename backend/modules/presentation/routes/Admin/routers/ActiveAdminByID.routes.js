import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import ActiveAdminByIDController from "../../../controllers/Admin/ActiveAdminByID.controller.js";
const router = express.Router();
/**
 * @swagger
 * /admin/active:
 *   patch:
 *     summary: Toggle active status of Admin
 *     tags: [Admins]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - AdminID
 *             properties:
 *               AdminID:
 *                 type: string
 *                 description: The Admin ID to toggle active status
 *             example:
 *               AdminID: "6535c90b3d7b3110acb4d24c"
 *     responses:
 *       200:
 *         description: Admin active status toggled successfully
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
 *                   $ref: '#/components/schemas/Admin'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Internal server error
 */

router.patch("/", asyncHandler(ActiveAdminByIDController));
export default router;
