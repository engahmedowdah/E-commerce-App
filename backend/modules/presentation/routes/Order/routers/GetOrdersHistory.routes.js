import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import GetOrdersHistoryController from "../../../controllers/Order/GetOrdersHistory.controller.js";
const router = express.Router();
/**
 * @swagger
 * /order/history:
 *   get:
 *     summary: Get order history for a user
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - UserID
 *             properties:
 *               UserID:
 *                 type: string
 *                 description: The user ID to get history for
 *             example:
 *               UserID: "6535c90b3d7b3110acb4d24c"
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Items limit
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *           default: newest
 *         description: Sort order
 *     responses:
 *       200:
 *         description: Orders history fetched successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.get("/", asyncHandler(GetOrdersHistoryController));
export default router;
