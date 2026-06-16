import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import DeleteItemFromCartController from "../../../controllers/Cart/DeleteItemFromCart.controller.js";
const router = express.Router();
/**
 * @swagger
 * /cart:
 *   delete:
 *     summary: Remove item from cart
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
 *             properties:
 *               UserID: { type: "string" }
 *               ProductID: { type: "string" }
 *             example:
 *               UserID: "6535c90b3d7b3110acb4d24c"
 *               ProductID: "6535c90b3d7b3110acb4d24d"
 *     responses:
 *       200:
 *         description: Cart item removed successfully
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
 *         description: Cart not found
 *       500:
 *         description: Internal server error
 */
router.delete("/", asyncHandler(DeleteItemFromCartController));
export default router;
