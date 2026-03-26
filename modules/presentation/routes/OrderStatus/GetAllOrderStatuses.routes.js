import express from "express";
import GetAllOrderStatusesController from "../../controllers/OrderStatus/GetAllOrderStatuses.controller.js";

const router = express.Router();

/**
 * @openapi
 * /order-statuses:
 *   get:
 *     summary: Get all order statuses
 *     tags: [OrderStatus]
 *     responses:
 *       200:
 *         description: List of order statuses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/OrderStatus'
 */
router.get("/", GetAllOrderStatusesController);

export default router;
