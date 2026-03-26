import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import GetItemsByCollectionController from "../../controllers/Collection/GetItemsByCollection.controller.js";

const router = express.Router();

/**
 * @openapi
 * /collection/items:
 *   get:
 *     summary: Get items by collection
 *     tags: [Collection]
 *     parameters:
 *       - in: query
 *         name: collectionID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of items in the collection
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Item'
 */
router.get("/", asyncHandler(GetItemsByCollectionController));

export default router;
