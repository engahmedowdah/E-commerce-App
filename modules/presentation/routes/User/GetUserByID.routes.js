import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import GetUserByIDController from "../../controllers/User/GetUserByID.controller.js";

const router = express.Router();

/**
 * @openapi
 * /user:
 *   get:
 *     summary: Get a user by ID
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               UserID: { type: "string" }
 *     responses:
 *       200:
 *         description: User fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 */
router.get("/", GetUserByIDController);

export default router;
