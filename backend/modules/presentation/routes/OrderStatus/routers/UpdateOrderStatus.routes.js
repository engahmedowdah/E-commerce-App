import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import UpdateOrderStatusController from "../../../controllers/OrderStatus/UpdateOrderStatus.controller.js";
const router = express.Router();
/**
 * @swagger
 * /order-status:
 *   put:
 *     summary: Update Order Status
 *     tags: [OrderStatuses]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "6535c90b3d7b3110acb4d24c"
 *         description: The Order Status ID to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/OrderStatus'
 *     responses:
 *       200:
 *         description: Order Status updated successfully
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
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */

router.put("/", asyncHandler(UpdateOrderStatusController));
export default router;
