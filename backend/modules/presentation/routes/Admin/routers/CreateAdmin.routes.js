import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import CreateAdminController from "../../../controllers/Admin/CreateAdmin.controller.js";
const router = express.Router();
/**
 * @swagger
 * /admin:
 *   post:
 *     summary: Create a new Admin
 *     tags: [Admins]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Admin'
 *             example:
 *               FirstName: "Ahmed"
 *               LastName: "Admin"
 *               Email: "ahmed.admin@kutuku.com"
 *               UserName: "ahmed_admin"
 *               Phone: "+966512345678"
 *               Password: "SecurePass123!"
 *               ConfirmPassword: "SecurePass123!"
 *               RoleID: "6535c90b3d7b3110acb4d24c"
 *     responses:
 *       201:
 *         description: Admin created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *                 data:
 *                   $ref: '#/components/schemas/Admin'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

router.post("/", asyncHandler(CreateAdminController));
export default router;
