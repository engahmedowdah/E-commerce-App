import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import AddItemToCartController from "../../controllers/Cart/AddItemToCart.controller.js";

const router = express.Router();

/**
 * @openapi
 * /cart:
 *   post:
 *     summary: Add an item to the cart
 *     tags: [Cart]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               UserID: { type: "string" }
 *               ProductID: { type: "string" }
 *               Quantity: { type: "integer" }
 *     responses:
 *       201:
 *         description: Item added to cart successfully
 *       400:
 *         description: Invalid input
 */
router.post("/", asyncHandler(AddItemToCartController));

export default router;
