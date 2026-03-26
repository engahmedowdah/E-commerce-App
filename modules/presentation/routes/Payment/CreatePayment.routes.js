import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import CreatePaymentController from "../../controllers/Payment/CreatePayment.controller.js";

const router = express.Router();

/**
 * @openapi
 * /payment:
 *   post:
 *     summary: Create a new payment
 *     tags: [Payment]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               OrderID: { type: "string" }
 *               PaymentMethod: { type: "string" }
 *               Amount: { type: "number" }
 *     responses:
 *       201:
 *         description: Payment created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/", asyncHandler(CreatePaymentController));

export default router;
