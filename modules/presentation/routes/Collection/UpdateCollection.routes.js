import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import UpdateCollectionController from "../../controllers/Collection/UpdateCollection.controller.js";

const router = express.Router();

/**
 * @openapi
 * /collection:
 *   put:
 *     summary: Update a collection by ID
 *     tags: [Collection]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CollectionID: { type: "string" }
 *               CollectionName: { type: "string" }
 *               Description: { type: "string" }
 *     responses:
 *       200:
 *         description: Collection updated successfully
 *       400:
 *         description: Failed to update collection
 */
router.put("/", asyncHandler(UpdateCollectionController));

export default router;
