import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import CreatePaymentMethod from "../../../controllers/PaymentMethod/CreatePaymentMethod.controller.js";
const router = express.Router();
/**
 * @swagger
 * /payment-method:
 *   post:
 *     summary: Create a new Payment Method
 *     tags: [PaymentMethods]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PaymentMethod'
 *             example:
 *               Name: "Credit Card"
 *               Description: "Visa/Mastercard credit card payments"
 *     responses:
 *       201:
 *         description: Payment Method created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *                 data:
 *                   $ref: '#/components/schemas/PaymentMethod'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

router.post("/", asyncHandler(CreatePaymentMethod));
export default router;
