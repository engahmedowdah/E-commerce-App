import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import UpdatePaymentStatus from "../../controllers/PaymentStatus/UpdatePaymentStatus.controller.js";

const router = express.Router();

/**
 * @openapi
 * /payment-status:
 *   put:
 *     summary: Update a payment status by ID
 *     tags: [PaymentStatus]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               PaymentStatusID: { type: "string" }
 *               Name: { type: "string" }
 *               Description: { type: "string" }
 *     responses:
 *       200:
 *         description: Payment status updated successfully
 *       400:
 *         description: Failed to update payment status
 */
router.put("/", asyncHandler(UpdatePaymentStatus));

export default router;
