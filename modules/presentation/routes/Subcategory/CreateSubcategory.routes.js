import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import CreateSubcategoryController from "../../controllers/Subcategory/CreateSubcategory.controller.js";

const router = express.Router();

/**
 * @openapi
 * /subcategory:
 *   post:
 *     summary: Create a new subcategory
 *     tags: [Subcategory]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Name: { type: "string" }
 *               CategoryID: { type: "string" }
 *               Description: { type: "string" }
 *               Slug: { type: "string" }
 *               IsActive: { type: "boolean" }
 *               AdminId: { type: "string" }
 *     responses:
 *       201:
 *         description: Subcategory created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/", asyncHandler(CreateSubcategoryController));

export default router;
