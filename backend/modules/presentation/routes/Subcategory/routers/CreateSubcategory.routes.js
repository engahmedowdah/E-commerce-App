import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import CreateSubcategoryController from "../../../controllers/Subcategory/CreateSubcategory.controller.js";
const router = express.Router();
/**
 * @swagger
 * /subcategory:
 *   post:
 *     summary: Create a new Subcategory
 *     tags: [Subcategories]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Subcategory'
 *             example:
 *               Name: "Smartphones"
 *               Description: "Mobile phones and smartphones"
 *               CategoryID: "6535c90b3d7b3110acb4d24c"
 *               Slug: "smartphones"
 *     responses:
 *       201:
 *         description: Subcategory created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *                 data:
 *                   $ref: '#/components/schemas/Subcategory'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

router.post("/", asyncHandler(CreateSubcategoryController));
export default router;
