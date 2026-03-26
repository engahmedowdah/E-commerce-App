import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import ActivePaymentStatusByIDController from "../../controllers/PaymentStatus/ActivePaymentStatusByID.controller.js";

const router = express.Router();

/**
 * @openapi
 * /payment-status/active:
 *   patch:
 *     summary: Activate a payment status by ID
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
 *         description: Payment status activated successfully
 *       400:
 *         description: Failed to activate payment status
 */
router.patch("/", asyncHandler(ActivePaymentStatusByIDController));

export default router;
