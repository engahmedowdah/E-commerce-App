import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import DeleteCollectionController from "../../controllers/Collection/DeleteCollection.controller.js";

const router = express.Router();

/**
 * @openapi
 * /collection:
 *   delete:
 *     summary: Delete a collection by ID
 *     tags: [Collection]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CollectionID: { type: "string" }
 *     responses:
 *       200:
 *         description: Collection deleted successfully
 *       400:
 *         description: Failed to delete collection
 */
router.delete("/", asyncHandler(DeleteCollectionController));

export default router;
