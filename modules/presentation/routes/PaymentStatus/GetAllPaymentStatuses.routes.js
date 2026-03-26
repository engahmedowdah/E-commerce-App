import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import GetAllPaymentStatuses from "../../controllers/PaymentStatus/GetAllPaymentStatuses.controller.js";

const router = express.Router();

/**
 * @openapi
 * /payment-statuses:
 *   get:
 *     summary: Get all payment statuses
 *     tags: [PaymentStatus]
 *     responses:
 *       200:
 *         description: List of payment statuses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PaymentStatus'
 */
router.get("/", asyncHandler(GetAllPaymentStatuses));

export default router;
