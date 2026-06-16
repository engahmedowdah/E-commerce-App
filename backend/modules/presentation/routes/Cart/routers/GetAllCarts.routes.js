import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import validatePagination from "../../../../../middlewares/validatePagination.middleware.js";
import GetAllCartsController from "../../../controllers/Cart/GetAllCarts.controller.js";
const router = express.Router();

/**
 * @swagger
 * /carts:
 *   get:
 *     summary: Get all carts
 *     tags: [Carts]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - $ref: '#/components/parameters/PageParam'
 *       - $ref: '#/components/parameters/LimitParam'
 *       - $ref: '#/components/parameters/SortParam'
 *     responses:
 *       200:
 *         description: List of carts
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
 *                     totalItems:
 *                       type: integer
 *                       example: 50
 *                     totalPages:
 *                       type: integer
 *                     currentPage:
 *                       type: integer
 *                     limit:
 *                       type: integer
 *                     stats:
 *                       type: object
 *                       properties:
 *                         totalItems:
 *                           type: integer
 *                         totalProducts:
 *                           type: integer
 *                         avgProducts:
 *                           type: number
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.get("/", asyncHandler(GetAllCartsController));
export default router;
