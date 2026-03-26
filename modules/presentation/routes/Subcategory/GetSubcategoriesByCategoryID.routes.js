import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import GetSubcategoriesByCategoryIDController from "../../controllers/Subcategory/GetSubcategoriesByCategoryID.controller.js";

const router = express.Router();

/**
 * @openapi
 * /subcategories:
 *   get:
 *     summary: Get subcategories by category ID
 *     tags: [Subcategory]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CategoryID: { type: "string" }
 *     responses:
 *       200:
 *         description: Subcategories fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Subcategory'
 */
router.get("/", asyncHandler(GetSubcategoriesByCategoryIDController));

export default router;
