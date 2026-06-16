import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import CreateOrderStatusController from "../../../controllers/OrderStatus/CreateOrderStatus.controller.js";
const router = express.Router();
/**
 * @swagger
 * /order-status:
 *   post:
 *     summary: Create a new Order Status
 *     tags: [OrderStatuses]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrderStatus'
 *             example:
 *               Name: "Processing"
 *               Description: "Order is being processed"
 *     responses:
 *       201:
 *         description: Order Status created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *                 data:
 *                   $ref: '#/components/schemas/OrderStatus'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

router.post("/", asyncHandler(CreateOrderStatusController));
export default router;
