import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import GetAllUserAddressesByUserIDController from "../../controllers/Address/GetAllUserAddressesByUserID.controller.js";

const router = express.Router();

/**
 * @openapi
 * /addresses:
 *   get:
 *     summary: Get all user addresses by user ID
 *     tags: [Addresses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               UserID: { type: "string" }
 *               
 *     responses:
 *       200:
 *         description: Addresses fetched successfully
 *       404:
 *         description: Addresses not found
 */
router.post("/", asyncHandler(GetAllUserAddressesByUserIDController));

export default router;
