import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import GetSubcategoryByIDController from "../../controllers/Subcategory/GetSubcategoryByID.controller.js";

const router = express.Router();

/**
 * @openapi
 * /subcategory:
 *   get:
 *     summary: Get a subcategory by ID
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
 *         description: Subcategory fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subcategory'
 *       404:
 *         description: Subcategory not found
 */
router.get("/", asyncHandler(GetSubcategoryByIDController));

export default router;
