import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import CreatePaymentStatus from "../../../controllers/PaymentStatus/CreatePaymentStatus.controller.js";
const router = express.Router();
/**
 * @swagger
 * /payment-status:
 *   post:
 *     summary: Create a new Payment Status
 *     tags: [PaymentStatuses]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PaymentStatus'
 *             example:
 *               Name: "Completed"
 *               Description: "Payment has been completed successfully"
 *     responses:
 *       201:
 *         description: Payment Status created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *                 data:
 *                   $ref: '#/components/schemas/PaymentStatus'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

router.post("/", asyncHandler(CreatePaymentStatus));
export default router;
