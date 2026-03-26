import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import CreateOrderStatusController from "../../controllers/OrderStatus/CreateOrderStatus.controller.js";

const router = express.Router();

/**
 * @openapi
 * /order-status:
 *   post:
 *     summary: Create a new order status
 *     tags: [OrderStatus]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Name: { type: "string" }
 *               Description: { type: "string" }
 *     responses:
 *       201:
 *         description: Order status created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/", asyncHandler(CreateOrderStatusController));

export default router;
