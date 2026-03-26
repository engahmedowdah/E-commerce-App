import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import SearchWithFiltersController from "../../controllers/Product/SearchWithFilters.controller.js";

const router = express.Router();

/**
 * @openapi
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
 *             properties:
 *               Name: { type: "string" }
 *               CategoryID: { type: "string" }
 *               CollectionID: { type: "string" }
 *               MinPrice: { type: "number" }
 *               MaxPrice: { type: "number" }
 *               PageSize: { type: "number" }
 *               PageNumber: { type: "number" }
 *     responses:
 *       200:
 *         description: Search results fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.post("/", asyncHandler(SearchWithFiltersController));

export default router;
