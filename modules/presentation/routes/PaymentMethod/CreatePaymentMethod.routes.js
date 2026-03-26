import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import CreatePaymentMethod from "../../controllers/PaymentMethod/CreatePaymentMethod.controller.js";

const router = express.Router();

/**
 * @openapi
 * /payment-method:
 *   post:
 *     summary: Create a new payment method
 *     tags: [PaymentMethod]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Name: { type: "string" }
 *               Description: { type: "string" }
 *     responses:
 *       201:
 *         description: Payment method created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/", asyncHandler(CreatePaymentMethod));

export default router;
