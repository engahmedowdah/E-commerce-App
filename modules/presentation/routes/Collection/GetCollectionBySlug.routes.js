import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import GetCollectionBySlugController from "../../controllers/Collection/GetCollectionBySlug.controller.js";

const router = express.Router();

/**
 * @openapi
 * /collection/slug:
 *   get:
 *     summary: Get a collection by slug
 *     tags: [Collection]
 *     parameters:
 *       - in: query
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Collection fetched successfully
 *       404:
 *         description: Collection not found
 */
router.get("/slug", asyncHandler(GetCollectionBySlugController));

export default router;
