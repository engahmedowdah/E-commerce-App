import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import UpdateOrderController from "../../controllers/Order/UpdateOrder.controller.js";

const router = express.Router();

/**
 * @openapi
 * /order:
 *   put:
 *     summary: Update an order by ID
 *     tags: [Order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               OrderID: { type: "string" }
 *               Description: { type: "string" }
 *     responses:
 *       200:
 *         description: Order updated successfully
 *       400:
 *         description: Failed to update order
 */
router.put("/", asyncHandler(UpdateOrderController));

export default router;
