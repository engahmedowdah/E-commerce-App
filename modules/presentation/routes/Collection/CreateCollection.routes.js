import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import CreateCollectionController from "../../controllers/Collection/CreateCollection.controller.js";

const router = express.Router();

/**
 * @openapi
 * /collection:
 *   post:
 *     summary: Create a new collection
 *     tags: [Collection]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CollectionName: { type: "string" }
 *               Description: { type: "string" }
 *     responses:
 *       201:
 *         description: Collection created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/", asyncHandler(CreateCollectionController));

export default router;
