import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import ActiveCollectionByIDController from "../../../controllers/Collection/ActiveCollectionByID.controller.js";
const router = express.Router();
/**
 * @swagger
 * /collection/active:
 *   patch:
 *     summary: Toggle active status of Collection
 *     tags: [Collections]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - CollectionID
 *             properties:
 *               CollectionID:
 *                 type: string
 *                 description: The Collection ID to toggle active status
 *             example:
 *               CollectionID: "6535c90b3d7b3110acb4d24c"
 *     responses:
 *       200:
 *         description: Collection active status toggled successfully
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
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Collection not found
 *       500:
 *         description: Internal server error
 */

router.patch("/", asyncHandler(ActiveCollectionByIDController));
export default router;
