import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import GetCollectionByIDController from "../../controllers/Collection/GetCollectionByID.controller.js";

const router = express.Router();

/**
 * @openapi
 * /collection:
 *   get:
 *     summary: Get a collection by ID
 *     tags: [Collection]
 *     parameters:
 *       - in: query
 *         name: collectionID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Collection fetched successfully
 *       404:
 *         description: Collection not found
 */
router.get("/", asyncHandler(GetCollectionByIDController));

export default router;
