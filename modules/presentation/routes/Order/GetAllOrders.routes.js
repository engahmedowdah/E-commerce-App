import express from "express";
import GetAllOrdersController from "../../controllers/Order/GetAllOrders.controller.js";

const router = express.Router();

/**
 * @openapi
 * /orders:
 *   get:
 *     summary: Get all orders
 *     tags: [Order]
 *     responses:
 *       200:
 *         description: List of orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */
router.get("/", GetAllOrdersController);

export default router;
