import express from "express";
import GetOrderByIDController from "../../controllers/Order/GetOrderByID.controller.js";

const router = express.Router();

/**
 * @openapi
 * /order:
 *   get:
 *     summary: Get an order by ID
 *     tags: [Order]
 *     parameters:
 *       - in: query
 *         name: orderID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Order fetched successfully
 *       404:
 *         description: Order not found
 */
router.get("/", GetOrderByIDController);

export default router;
