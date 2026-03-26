import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import DeleteOrderStatusController from "../../controllers/OrderStatus/DeleteOrderStatus.controller.js";

const router = express.Router();

/**
 * @openapi
 * /order-status:
 *   delete:
 *     summary: Delete an order status by ID
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
 *         description: Order status deleted successfully
 *       400:
 *         description: Failed to delete order status
 */
router.delete("/", asyncHandler(DeleteOrderStatusController));

export default router;
