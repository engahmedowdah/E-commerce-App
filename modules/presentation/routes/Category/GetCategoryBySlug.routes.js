import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import GetCategoryBySlugController from "../../controllers/Category/GetCategoryBySlug.controller.js";

const router = express.Router();

/**
 * @openapi
 * /category/slug:
 *   get:
 *     summary: Get a category by slug
 *     tags: [Category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Slug: { type: "string" }
 *     responses:
 *       200:
 *         description: Category fetched successfully
 *       404:
 *         description: Category not found
 */
router.get("/slug", asyncHandler(GetCategoryBySlugController));

export default router;
