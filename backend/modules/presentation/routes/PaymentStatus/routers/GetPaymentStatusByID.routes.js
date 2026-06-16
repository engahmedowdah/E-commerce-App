import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import GetPaymentStatusByID from "../../../controllers/PaymentStatus/GetPaymentStatusByID.controller.js";
const router = express.Router();
/**
 * @swagger
 * /payment-status:
 *   get:
 *     summary: Get Payment Status by ID
 *     tags: [PaymentStatuses]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "6535c90b3d7b3110acb4d24c"
 *         description: The resource ID
 *     responses:
 *       200:
 *         description: Payment Status found
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
 *       404:
 *         description: Not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

router.get("/", asyncHandler(GetPaymentStatusByID));
export default router;
