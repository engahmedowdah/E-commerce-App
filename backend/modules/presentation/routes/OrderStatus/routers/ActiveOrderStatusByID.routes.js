import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import ActiveOrderStatusByIDController from "../../../controllers/OrderStatus/ActiveOrderStatusByID.controller.js";
const router = express.Router();
/**
 * @swagger
 * /order-status/active:
 *   patch:
 *     summary: Toggle active status of Order Status
 *     tags: [OrderStatuses]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - OrderStatusID
 *             properties:
 *               OrderStatusID:
 *                 type: string
 *                 description: The Order Status ID to toggle active status
 *             example:
 *               OrderStatusID: "6535c90b3d7b3110acb4d24c"
 *     responses:
 *       200:
 *         description: Order Status active status toggled successfully
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
 *                   $ref: '#/components/schemas/OrderStatus'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Order Status not found
 *       500:
 *         description: Internal server error
 */

router.patch("/", asyncHandler(ActiveOrderStatusByIDController));
export default router;
