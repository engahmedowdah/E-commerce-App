import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import AddItemToCartController from "../../../controllers/Cart/AddItemToCart.controller.js";
const router = express.Router();
/**
 * @swagger
 * /cart:
 *   post:
 *     summary: Add item to cart
 *     tags: [Carts]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - UserID
 *               - ProductID
 *               - Quantity
 *             properties:
 *               UserID: { type: "string" }
 *               ProductID: { type: "string" }
 *               Quantity: { type: "number" }
 *             example:
 *               UserID: "6535c90b3d7b3110acb4d24c"
 *               ProductID: "6535c90b3d7b3110acb4d24d"
 *               Quantity: 2
 *     responses:
 *       201:
 *         description: Item added to cart successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: "boolean" }
 *                 message: { type: "string" }
 *                 data: { $ref: '#/components/schemas/Cart' }
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/", asyncHandler(AddItemToCartController));
export default router;
