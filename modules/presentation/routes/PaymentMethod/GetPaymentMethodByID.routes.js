import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import GetPaymentMethodByID from "../../controllers/PaymentMethod/GetPaymentMethodByID.controller.js";

const router = express.Router();

/**
 * @openapi
 * /payment-method:
 *   get:
 *     summary: Get a payment method by ID
 *     tags: [PaymentMethod]
 *     parameters:
 *       - in: query
 *         name: PaymentMethodID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Payment method fetched successfully
 *       404:
 *         description: Payment method not found
 */
router.get("/", asyncHandler(GetPaymentMethodByID));

export default router;
