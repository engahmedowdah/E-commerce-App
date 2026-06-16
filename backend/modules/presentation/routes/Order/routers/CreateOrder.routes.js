import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import CreateOrderController from "../../../controllers/Order/CreateOrder.controller.js";
const router = express.Router();
/**
 * @swagger
 * /order:
 *   post:
 *     summary: Create a new Order
 *     tags: [Orders]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *             example:
 *               UserID: "6535c90b3d7b3110acb4d24c"
 *               AddressID: "6535c90b3d7b3110acb4d24d"
 *               PaymentID: "6535c90b3d7b3110acb4d24e"
 *               OrderStatusID: "6535c90b3d7b3110acb4d24f"
 *     responses:
 *       201:
 *         description: Order created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *                 data:
 *                   $ref: '#/components/schemas/Order'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

router.post("/", asyncHandler(CreateOrderController));
export default router;
