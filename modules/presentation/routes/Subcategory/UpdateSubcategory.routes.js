import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import UpdateSubcategoryController from "../../controllers/Subcategory/UpdateSubcategory.controller.js";

const router = express.Router();

/**
 * @openapi
 * /subcategory:
 *   put:
 *     summary: Update a subcategory by ID
 *     tags: [Subcategory]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               SubcategoryID: { type: "string" }
 *               Name: { type: "string" }
 *               CategoryID: { type: "string" }
 *               Description: { type: "string" }
 *               Slug: { type: "string" }
 *               IsActive: { type: "boolean" }
 *               AdminId: { type: "string" }
 *     responses:
 *       200:
 *         description: Subcategory updated successfully
 *       404:
 *         description: Subcategory not found
 */
router.put("/", asyncHandler(UpdateSubcategoryController));

export default router;
