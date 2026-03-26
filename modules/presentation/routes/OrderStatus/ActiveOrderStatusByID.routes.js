import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import ActiveOrderStatusByIDController from "../../controllers/OrderStatus/ActiveOrderStatusByID.controller.js";

const router = express.Router();

/**
 * @openapi
 * /order-status/active:
 *   patch:
 *     summary: Activate an order status by ID
 *     tags: [OrderStatus]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               OrderStatusID: { type: "string" }
 *     responses:
 *       200:
 *         description: Order status activated successfully
 *       400:
 *         description: Failed to activate order status
 */
router.patch("/", asyncHandler(ActiveOrderStatusByIDController));

export default router;
