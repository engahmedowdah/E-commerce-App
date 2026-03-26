import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import DeleteItemFromCartController from "../../controllers/Cart/DeleteItemFromCart.controller.js";

const router = express.Router();

/**
 * @openapi
 * /cart:
 *   delete:
 *     summary: Delete an item from the cart
 *     tags: [Cart]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CartItemID: { type: "string" }
 *     responses:
 *       200:
 *         description: Item deleted from cart successfully
 *       400:
 *         description: Failed to delete item from cart
 */
router.delete("/", asyncHandler(DeleteItemFromCartController));

export default router;
