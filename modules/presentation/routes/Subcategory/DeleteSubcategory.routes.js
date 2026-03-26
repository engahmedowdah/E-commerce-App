import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import DeleteSubcategoryController from "../../controllers/Subcategory/DeleteSubcategory.controller.js";

const router = express.Router();

/**
 * @openapi
 * /subcategory:
 *   delete:
 *     summary: Delete a subcategory by ID
 *     tags: [Subcategory]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               SubcategoryID: { type: "string" }
 *     responses:
 *       204:
 *         description: Subcategory deleted successfully
 *       404:
 *         description: Subcategory not found
 */
router.delete("/", asyncHandler(DeleteSubcategoryController));

export default router;
