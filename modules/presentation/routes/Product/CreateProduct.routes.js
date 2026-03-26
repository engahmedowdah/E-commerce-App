import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import CreateProductController from "../../controllers/Product/CreateProduct.controller.js";
import upload from "../../../../middlewares/upload.js";

const router = express.Router();

/**
 * @openapi
 * /product:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               Name: { type: "string" }
 *               Description: { type: "string" }
 *               Price: { type: "number" }
 *               Stock: { type: "number" }
 *               CategoryID: { type: "string" }
 *               CollectionID: { type: "string" }
 *               Images:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       201:
 *         description: Product created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/", upload.array("images", 10), asyncHandler(CreateProductController));

export default router;
