import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import GetCategoryBySlugController from "../../../controllers/Category/GetCategoryBySlug.controller.js";
const router = express.Router();
/**
 * @swagger
 * /category/slug:
 *   get:
 *     summary: Get Category by slug
 *     tags: [Categories]
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
 *         description: Category found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Category'
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */

router.get("/", asyncHandler(GetCategoryBySlugController));
export default router;
