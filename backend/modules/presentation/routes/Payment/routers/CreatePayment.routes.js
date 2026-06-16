import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import CreatePaymentController from "../../../controllers/Payment/CreatePayment.controller.js";
const router = express.Router();
/**
 * @swagger
 * /payment:
 *   post:
 *     summary: Create a new Payment
 *     tags: [Payments]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               UserID: { type: string }
 *               Amount: { type: number }
 *               CurrencySymbolID: { type: string }
 *               PaymentMethodID: { type: string }
 *               PaymentStatusID: { type: string }
 *             example:
 *               UserID: "6535c90b3d7b3110acb4d24c"
 *               Amount: 299.99
 *               CurrencySymbolID: "6535c90b3d7b3110acb4d24d"
 *               PaymentMethodID: "6535c90b3d7b3110acb4d24e"
 *               PaymentStatusID: "6535c90b3d7b3110acb4d24f"
 *     responses:
 *       201:
 *         description: Payment created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Payment'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

router.post("/", asyncHandler(CreatePaymentController));
export default router;
