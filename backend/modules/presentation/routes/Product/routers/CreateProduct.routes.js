import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import CreateProductController from "../../../controllers/Product/CreateProduct.controller.js";
import upload from "../../../../../middlewares/upload.js";
const router = express.Router();
/**
 * @swagger
 * /product:
 *   post:
 *     summary: Create a new Product
 *     tags: [Products]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *             example:
 *               Name: "Wireless Bluetooth Headphones"
 *               Description: "Premium noise-cancelling wireless headphones"
 *               Price: 149.99
 *               Stock: 250
 *               CategoryIDs: ["6535c90b3d7b3110acb4d24c"]
 *               SubcategoryIDs: ["6535c90b3d7b3110acb4d24d"]
 *               CollectionIDs: ["6535c90b3d7b3110acb4d24e"]
 *     responses:
 *       201:
 *         description: Product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *                 data:
 *                   $ref: '#/components/schemas/Product'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

router.post("/", upload.array("images", 10), asyncHandler(CreateProductController));
export default router;
