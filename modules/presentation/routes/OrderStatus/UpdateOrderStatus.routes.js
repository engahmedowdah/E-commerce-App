import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import UpdateOrderStatusController from "../../controllers/OrderStatus/UpdateOrderStatus.controller.js";

const router = express.Router();

/**
 * @openapi
 * /order-status:
 *   put:
 *     summary: Update an order status
 *     tags: [OrderStatus]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orderStatusID: { type: "string" }
 *               name: { type: "string" }
 *               isActivated: { type: "boolean" }
 *               updatedBy: { type: "string" }
 *     responses:
 *       200:
 *         description: Order status updated successfully
 *       400:
 *         description: Invalid input
 */
router.put("/", asyncHandler(UpdateOrderStatusController));

export default router;
