import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import UpdateItemQuantityController from "../../controllers/Cart/UpdateItemQuantity.controller.js";

const router = express.Router();

/**
 * @openapi
 * /cart/update-quantity:
 *   put:
 *     summary: Update the quantity of an item in the cart
 *     tags: [Cart]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CartItemID: { type: "string" }
 *               Quantity: { type: "integer" }
 *     responses:
 *       200:
 *         description: Item quantity updated successfully
 *       400:
 *         description: Failed to update item quantity
 */
router.put("/", asyncHandler(UpdateItemQuantityController));

export default router;
