import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import UpdateItemQuantityController from "../../../controllers/Cart/UpdateItemQuantity.controller.js";
const router = express.Router();
/**
 * @swagger
 * /cart:
 *   put:
 *     summary: Update item quantity in cart
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
 *               Quantity: 5
 *     responses:
 *       200:
 *         description: Cart item updated successfully
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
 *       404:
 *         description: Item not found in cart
 *       500:
 *         description: Internal server error
 */
router.put("/", asyncHandler(UpdateItemQuantityController));
export default router;
