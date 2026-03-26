import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import GetOrderStatusByIDController from "../../controllers/OrderStatus/GetOrderStatusByID.controller.js";

const router = express.Router();

/**
 * @openapi
 * /order-status:
 *   get:
 *     summary: Get an order status by ID
 *     tags: [OrderStatus]
 *     parameters:
 *       - in: query
 *         name: orderStatusID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Order status fetched successfully
 *       404:
 *         description: Order status not found
 */
router.get("/", asyncHandler(GetOrderStatusByIDController));

export default router;
