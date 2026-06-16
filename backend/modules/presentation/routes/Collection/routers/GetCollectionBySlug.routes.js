import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import GetCollectionBySlugController from "../../../controllers/Collection/GetCollectionBySlug.controller.js";
const router = express.Router();
/**
 * @swagger
 * /collection/slug:
 *   get:
 *     summary: Get Collection by slug
 *     tags: [Collections]
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
 *         description: Collection found
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
 *                   $ref: '#/components/schemas/Collection'
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */

router.get("/", asyncHandler(GetCollectionBySlugController));
export default router;
