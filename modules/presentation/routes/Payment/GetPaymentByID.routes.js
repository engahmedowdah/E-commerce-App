import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import GetPaymentByIDController from "../../controllers/Payment/GetPaymentByID.controller.js";

const router = express.Router();

/**
 * @openapi
 * /payment:
 *   get:
 *     summary: Get a payment by ID
 *     tags: [Payment]
 *     parameters:
 *       - in: query
 *         name: PaymentID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Payment fetched successfully
 *       404:
 *         description: Payment not found
 */
router.get("/", asyncHandler(GetPaymentByIDController));

export default router;
