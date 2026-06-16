import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import ActiveCategoryByIDController from "../../../controllers/Category/ActiveCategoryByID.controller.js";
const router = express.Router();
/**
 * @swagger
 * /category/active:
 *   patch:
 *     summary: Toggle active status of Category
 *     tags: [Categories]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - CategoryID
 *             properties:
 *               CategoryID:
 *                 type: string
 *                 description: The Category ID to toggle active status
 *             example:
 *               CategoryID: "6535c90b3d7b3110acb4d24c"
 *     responses:
 *       200:
 *         description: Category active status toggled successfully
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
 *                   $ref: '#/components/schemas/Category'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Category not found
 *       500:
 *         description: Internal server error
 */

router.patch("/", asyncHandler(ActiveCategoryByIDController));
export default router;
