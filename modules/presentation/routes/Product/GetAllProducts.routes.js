import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import GetAllProductsController from "../../controllers/Product/GetAllProducts.controller.js";

const router = express.Router();

/**
 * @openapi
 * /products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Products fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get("/", asyncHandler(GetAllProductsController));

export default router;
