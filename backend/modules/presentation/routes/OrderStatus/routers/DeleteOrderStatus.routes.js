import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import DeleteOrderStatusController from "../../../controllers/OrderStatus/DeleteOrderStatus.controller.js";
const router = express.Router();
/**
 * @swagger
 * /order-status:
 *   delete:
 *     summary: Delete Order Status
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
 *         description: The Order Status ID to delete
 *     responses:
 *       200:
 *         description: Order Status deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */

router.delete("/", asyncHandler(DeleteOrderStatusController));
export default router;
