import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import CreateCategoryController from "../../../controllers/Category/CreateCategory.controller.js";
const router = express.Router();
/**
 * @swagger
 * /category:
 *   post:
 *     summary: Create a new Category
 *     tags: [Categories]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *             example:
 *               Name: "Electronics"
 *               Description: "Latest electronic devices and gadgets"
 *               Slug: "electronics"
 *     responses:
 *       201:
 *         description: Category created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *                 data:
 *                   $ref: '#/components/schemas/Category'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

router.post("/", asyncHandler(CreateCategoryController));
export default router;
