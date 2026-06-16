import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import SearchWithFiltersController from "../../../controllers/Product/SearchWithFilters.controller.js";
const router = express.Router();
/**
 * @swagger
 * /products/filter:
 *   post:
 *     summary: Search products with filters
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - Name
 *             properties:
 *               Name:
 *                 type: string
 *                 description: The product name or search term
 *               CategoryIDs:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Filter by categories
 *               CollectionIDs:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Filter by collections
 *               MinPrice:
 *                 type: number
 *                 description: Minimum price filter
 *               MaxPrice:
 *                 type: number
 *                 description: Maximum price filter
 *             example:
 *               Name: "shirt"
 *               CategoryIDs: ["6535c90b3d7b3110acb4d24c"]
 *               CollectionIDs: ["6535c90b3d7b3110acb4d24d"]
 *               MinPrice: 10
 *               MaxPrice: 100
 *     responses:
 *       200:
 *         description: Search results fetched successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/", asyncHandler(SearchWithFiltersController));
export default router;
