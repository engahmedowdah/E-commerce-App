import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import GetAllPaymentMethods from "../../controllers/PaymentMethod/GetAllPaymentMethods.controller.js";

const router = express.Router();

/**
 * @openapi
 * /payment-methods:
 *   get:
 *     summary: Get all payment methods
 *     tags: [PaymentMethod]
 *     responses:
 *       200:
 *         description: List of payment methods
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PaymentMethod'
 */
router.get("/", asyncHandler(GetAllPaymentMethods));

export default router;
