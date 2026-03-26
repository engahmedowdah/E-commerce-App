import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import UpdatePaymentMethod from "../../controllers/PaymentMethod/UpdatePaymentMethod.controller.js";

const router = express.Router();

/**
 * @openapi
 * /payment-method:
 *   put:
 *     summary: Update a payment method by ID
 *     tags: [PaymentMethod]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               PaymentMethodID: { type: "string" }
 *               Name: { type: "string" }
 *               Description: { type: "string" }
 *     responses:
 *       200:
 *         description: Payment method updated successfully
 *       400:
 *         description: Failed to update payment method
 */
router.put("/", asyncHandler(UpdatePaymentMethod));

export default router;
