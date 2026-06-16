import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import validatePagination from "../../../../../middlewares/validatePagination.middleware.js";
import GetAllSubcategoriesController from "../../../controllers/Subcategory/GetAllSubcategories.controller.js";
const router = express.Router();
/**
 * @swagger
 * /subcategories:
 *   get:
 *     summary: Get all subcategories
 *     tags: [Subcategories]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - $ref: '#/components/parameters/PageParam'
 *       - $ref: '#/components/parameters/LimitParam'
 *       - $ref: '#/components/parameters/SortParam'
 *       - $ref: '#/components/parameters/FilterParam'
 *     responses:
 *       200:
 *         description: List of subcategories
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
 *                     $ref: '#/components/schemas/Subcategory'
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
 *                         activeItems:
 *                           type: integer
 *                         inactiveItems:
 *                           type: integer
 *                         avgProducts:
 *                           type: number
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

router.get("/", asyncHandler(GetAllSubcategoriesController));
export default router;
