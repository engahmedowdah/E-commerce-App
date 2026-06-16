import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import DeleteSubcategoryController from "../../../controllers/Subcategory/DeleteSubcategory.controller.js";
const router = express.Router();
/**
 * @swagger
 * /subcategory:
 *   delete:
 *     summary: Delete Subcategory
 *     tags: [Subcategories]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "6535c90b3d7b3110acb4d24c"
 *         description: The Subcategory ID to delete
 *     responses:
 *       200:
 *         description: Subcategory deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */

router.delete("/", asyncHandler(DeleteSubcategoryController));
export default router;
