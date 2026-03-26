import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import CreatePaymentStatus from "../../controllers/PaymentStatus/CreatePaymentStatus.controller.js";

const router = express.Router();

/**
 * @openapi
 * /payment-status:
 *   post:
 *     summary: Create a new payment status
 *     tags: [PaymentStatus]
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
 *         description: Payment status created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/", asyncHandler(CreatePaymentStatus));

export default router;
