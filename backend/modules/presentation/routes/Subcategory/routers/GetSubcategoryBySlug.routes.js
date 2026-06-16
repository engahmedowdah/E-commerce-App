import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import GetSubcategoryBySlugController from "../../../controllers/Subcategory/GetSubcategoryBySlug.controller.js";
const router = express.Router();
/**
 * @swagger
 * /subcategory/slug:
 *   get:
 *     summary: Get Subcategory by slug
 *     tags: [Subcategories]
 *     parameters:
 *       - in: query
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *           example: "my-resource-slug"
 *         description: The resource slug
 *     responses:
 *       200:
 *         description: Subcategory found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Subcategory'
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */

router.get("/", asyncHandler(GetSubcategoryBySlugController));
export default router;
