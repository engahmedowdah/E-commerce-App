import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import CreateOrderController from "../../controllers/Order/CreateOrder.controller.js";

const router = express.Router();

/**
 * @openapi
 * /order:
 *   post:
 *     summary: Create a new order
 *     tags: [Order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CountryID: { type: "string" }
 *               Description: { type: "string" }
 *     responses:
 *       201:
 *         description: Order created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/", asyncHandler(CreateOrderController));

export default router;
