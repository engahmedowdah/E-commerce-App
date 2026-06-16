import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import DeleteItemsFromCartController from "../../../controllers/Cart/DeleteItemsFromCart.controller.js";
const router = express.Router();
/**
 * @swagger
 * /cart/clear:
 *   delete:
 *     summary: Clear all items from cart
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
 *             properties:
 *               UserID: { type: "string" }
 *             example:
 *               UserID: "6535c90b3d7b3110acb4d24c"
 *     responses:
 *       200:
 *         description: Cart items deleted successfully
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
router.delete("/", asyncHandler(DeleteItemsFromCartController));
export default router;
