import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import ActivePaymentMethodByIDController from "../../../controllers/PaymentMethod/ActivePaymentMethodByID.controller.js";
const router = express.Router();
/**
 * @swagger
 * /payment-method/active:
 *   patch:
 *     summary: Toggle active status of Payment Method
 *     tags: [PaymentMethods]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - PaymentMethodID
 *             properties:
 *               PaymentMethodID:
 *                 type: string
 *                 description: The Payment Method ID to toggle active status
 *             example:
 *               PaymentMethodID: "6535c90b3d7b3110acb4d24c"
 *     responses:
 *       200:
 *         description: Payment Method active status toggled successfully
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
 *                   $ref: '#/components/schemas/PaymentMethod'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Payment Method not found
 *       500:
 *         description: Internal server error
 */

router.patch("/", asyncHandler(ActivePaymentMethodByIDController));
export default router;
