import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import ActiveCollectionByIDController from "../../controllers/Collection/ActiveCollectionByID.controller.js";

const router = express.Router();

/**
 * @openapi
 * /collection/active:
 *   patch:
 *     summary: Activate a collection by ID
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
 *         description: Collection activated successfully
 *       400:
 *         description: Failed to activate collection
 */
router.patch("/", asyncHandler(ActiveCollectionByIDController));

export default router;
