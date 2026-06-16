import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import DeleteCategoryController from "../../../controllers/Category/DeleteCategory.controller.js";
const router = express.Router();
/**
 * @swagger
 * /category:
 *   delete:
 *     summary: Delete Category
 *     tags: [Categories]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "6535c90b3d7b3110acb4d24c"
 *         description: The Category ID to delete
 *     responses:
 *       200:
 *         description: Category deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *                 data: { $ref: '#/components/schemas/Category' }
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */

router.delete("/", asyncHandler(DeleteCategoryController));
export default router;
