import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import GetPaymentStatusByID from "../../controllers/PaymentStatus/GetPaymentStatusByID.controller.js";

const router = express.Router();

/**
 * @openapi
 * /payment-status:
 *   get:
 *     summary: Get a payment status by ID
 *     tags: [PaymentStatus]
 *     parameters:
 *       - in: query
 *         name: PaymentStatusID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Payment status fetched successfully
 *       404:
 *         description: Payment status not found
 */
router.get("/", asyncHandler(GetPaymentStatusByID));

export default router;
