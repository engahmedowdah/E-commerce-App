import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import GetAllPaymentsController from "../../controllers/Payment/GetAllPayments.controller.js";

const router = express.Router();

/**
 * @openapi
 * /payments:
 *   get:
 *     summary: Get all payments
 *     tags: [Payment]
 *     responses:
 *       200:
 *         description: List of payments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Payment'
 */
router.get("/", asyncHandler(GetAllPaymentsController));

export default router;
