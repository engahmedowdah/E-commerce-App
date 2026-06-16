import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import CreateCollectionController from "../../../controllers/Collection/CreateCollection.controller.js";
const router = express.Router();
/**
 * @swagger
 * /collection:
 *   post:
 *     summary: Create a new Collection
 *     tags: [Collections]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Collection'
 *             example:
 *               Name: "Summer Sale 2026"
 *               Description: "Hot deals for summer season"
 *               Slug: "summer-sale-2026"
 *     responses:
 *       201:
 *         description: Collection created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *                 data:
 *                   $ref: '#/components/schemas/Collection'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

router.post("/", asyncHandler(CreateCollectionController));
export default router;
