import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import ActivePaymentMethodByIDController from "../../controllers/PaymentMethod/ActivePaymentMethodByID.controller.js";

const router = express.Router();

/**
 * @openapi
 * /payment-method/active:
 *   patch:
 *     summary: Activate a payment method by ID
 *     tags: [PaymentMethod]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               PaymentMethodID: { type: "string" }
 *     responses:
 *       200:
 *         description: Payment method activated successfully
 *       400:
 *         description: Failed to activate payment method
 */
router.patch("/", asyncHandler(ActivePaymentMethodByIDController));

export default router;
