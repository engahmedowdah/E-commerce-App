import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import GetCartItemsByUserIDController from "../../controllers/Cart/GetCartProductsByUserID.controller.js";

const router = express.Router();

/**
 * @openapi
 * /cart:
 *   get:
 *     summary: Get cart items by user ID
 *     tags: [Cart]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               UserID: { type: "string" }
 *               PageSize: { type: "integer" }
 *               PageNumber: { type: "integer" }
 *     responses:
 *       200:
 *         description: Cart items fetched successfully
 *       404:
 *         description: Cart items not found
 */
router.get("/", asyncHandler(GetCartItemsByUserIDController));

export default router;
