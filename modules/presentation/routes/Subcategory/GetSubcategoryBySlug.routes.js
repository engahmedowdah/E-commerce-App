import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import GetSubcategoryBySlugController from "../../controllers/Subcategory/GetSubcategoryBySlug.controller.js";

const router = express.Router();

/**
 * @openapi
 * /subcategory/slug:
 *   get:
 *     summary: Get a subcategory by slug
 *     tags: [Subcategory]
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
 *         description: Subcategory fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subcategory'
 *       404:
 *         description: Subcategory not found
 */
router.get("/slug", asyncHandler(GetSubcategoryBySlugController));

export default router;
