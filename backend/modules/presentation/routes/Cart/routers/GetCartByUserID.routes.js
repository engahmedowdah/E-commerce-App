import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import GetCartByUserIDController from "../../../controllers/Cart/GetCartByUserID.controller.js";
const router = express.Router();
/**
 * @swagger
 * /cart:
 *   get:
 *     summary: Get cart by user ID
 *     tags: [Carts]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: UserID
 *         required: false
 *         schema:
 *           type: string
 *           example: "6535c90b3d7b3110acb4d24c"
 *         description: The ID of the user to fetch cart for (optional)
 *       - $ref: '#/components/parameters/PageParam'
 *       - $ref: '#/components/parameters/LimitParam'
 *       - $ref: '#/components/parameters/SortParam'

 *     responses:
 *       200:
 *         description: Cart fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Cart'
 *                 meta:
 *                   type: object
 *                   properties:
 *                     totalItems: { type: 'integer' }
 *                     totalPages: { type: 'integer' }
 *                     currentPage: { type: 'integer' }
 *                     limit: { type: 'integer' }
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.get("/", asyncHandler(GetCartByUserIDController));
export default router;
