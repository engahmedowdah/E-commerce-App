import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import DeletePaymentMethod from "../../controllers/PaymentMethod/DeletePaymentMethod.controller.js";

const router = express.Router();

/**
 * @openapi
 * /payment-method:
 *   delete:
 *     summary: Delete a payment method by ID
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
 *         description: Payment method deleted successfully
 *       400:
 *         description: Failed to delete payment method
 */
router.delete("/", asyncHandler(DeletePaymentMethod));

export default router;
