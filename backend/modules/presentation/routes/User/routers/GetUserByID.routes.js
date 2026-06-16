import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import GetUserByIDController from "../../../controllers/User/GetUserByID.controller.js";
const router = express.Router();
/**
 * @swagger
 * /user:
 *   get:
 *     summary: Get User by ID
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "6535c90b3d7b3110acb4d24c"
 *         description: The resource ID
 *     responses:
 *       200:
 *         description: User found
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
 *                   $ref: '#/components/schemas/User'
 *       404:
 *         description: Not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

router.get("/", GetUserByIDController);
export default router;
