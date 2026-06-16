import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import DeleteImageController from "../../../controllers/Image/DeleteImage.controller.js";
const router = express.Router();
/**
 * @swagger
 * /image:
 *   delete:
 *     summary: Delete an image
 *     tags: [Images]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "6535c90b3d7b3110acb4d24c"
 *         description: The Image ID to delete
 *     responses:
 *       200:
 *         description: Image deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Image not found
 *       500:
 *         description: Internal server error
 */
router.delete("/", asyncHandler(DeleteImageController));
export default router;
