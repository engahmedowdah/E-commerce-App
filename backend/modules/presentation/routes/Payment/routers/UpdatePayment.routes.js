import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import UpdatePaymentController from "../../../controllers/Payment/UpdatePayment.controller.js";
const router = express.Router();
/**
 * @swagger
 * /payment:
 *   put:
 *     summary: Update Payment
 *     tags: [Payments]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "6535c90b3d7b3110acb4d24c"
 *         description: The Payment ID to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               PaymentID: { type: string }
 *               Amount: { type: number }
 *               CurrencySymbolID: { type: string }
 *               PaymentMethodID: { type: string }
 *               PaymentStatusID: { type: string }
 *     responses:
 *       200:
 *         description: Payment updated successfully
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
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */

router.put("/", asyncHandler(UpdatePaymentController));
export default router;
