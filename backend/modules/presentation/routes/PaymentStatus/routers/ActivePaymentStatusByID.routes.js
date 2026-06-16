import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import ActivePaymentStatusByIDController from "../../../controllers/PaymentStatus/ActivePaymentStatusByID.controller.js";
const router = express.Router();
/**
 * @swagger
 * /payment-status/active:
 *   patch:
 *     summary: Toggle active status of Payment Status
 *     tags: [PaymentStatuses]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - PaymentStatusID
 *             properties:
 *               PaymentStatusID:
 *                 type: string
 *                 description: The Payment Status ID to toggle active status
 *             example:
 *               PaymentStatusID: "6535c90b3d7b3110acb4d24c"
 *     responses:
 *       200:
 *         description: Payment Status active status toggled successfully
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
 *                   $ref: '#/components/schemas/PaymentStatus'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Payment Status not found
 *       500:
 *         description: Internal server error
 */

router.patch("/", asyncHandler(ActivePaymentStatusByIDController));
export default router;
