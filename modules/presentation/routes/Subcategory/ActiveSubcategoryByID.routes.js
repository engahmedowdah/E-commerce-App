import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import ActiveSubcategoryByIDController from "../../controllers/Subcategory/ActiveSubcategoryByID.controller.js";

const router = express.Router();

/**
 * @openapi
 * /subcategory/active:
 *   patch:
 *     summary: Activate a subcategory by ID
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
 *       200:
 *         description: Subcategory activated successfully
 *       400:
 *         description: Failed to activate subcategory
 */
router.patch("/", asyncHandler(ActiveSubcategoryByIDController));

export default router;
