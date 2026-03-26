import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import GetOrderHistoryController from "../../controllers/Order/GetOrderHistory.controller.js";

const router = express.Router();

/**
 * @openapi
 * /order/history:
 *   get:
 *     summary: Get order history
 *     tags: [Order]
 *     responses:
 *       200:
 *         description: List of orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */
router.get("/", asyncHandler(GetOrderHistoryController));

export default router;
