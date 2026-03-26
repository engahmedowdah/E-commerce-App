import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import DeletePaymentStatus from "../../controllers/PaymentStatus/DeletePaymentStatus.controller.js";

const router = express.Router();

/**
 * @openapi
 * /payment-status:
 *   delete:
 *     summary: Delete a payment status by ID
 *     tags: [PaymentStatus]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               PaymentStatusID: { type: "string" }
 *     responses:
 *       200:
 *         description: Payment status deleted successfully
 *       400:
 *         description: Failed to delete payment status
 */
router.delete("/", asyncHandler(DeletePaymentStatus));

export default router;
