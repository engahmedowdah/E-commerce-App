import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import GetAllUsersController from "../../controllers/User/GetAllUsers.controller.js";

const router = express.Router();

/**
 * @openapi
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Users fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get("/", GetAllUsersController);

export default router;
