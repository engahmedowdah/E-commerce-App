import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import CreateAdminController from "../../controllers/Admin/CreateAdmin.controller.js";

const router = express.Router();

/**
 * @openapi
 * /admin:
 *   post:
 *     summary: Create a new admin
 *     tags: [Admins]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               FirstName: { type: "string" }
 *               LastName: { type: "string" }
 *               Email: { type: "string" }
 *               Password: { type: "string" }
 *               RoleID: { type: "string" }
 *               UserID: { type: "string" }
 *     responses:
 *       201:
 *         description: Admin created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/", asyncHandler(CreateAdminController));

export default router;
