import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import ActiveSubcategoryByIDController from "../../../controllers/Subcategory/ActiveSubcategoryByID.controller.js";
const router = express.Router();
/**
 * @swagger
 * /subcategory/active:
 *   patch:
 *     summary: Toggle active status of Subcategory
 *     tags: [Subcategories]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - SubcategoryID
 *             properties:
 *               SubcategoryID:
 *                 type: string
 *                 description: The Subcategory ID to toggle active status
 *             example:
 *               SubcategoryID: "6535c90b3d7b3110acb4d24c"
 *     responses:
 *       200:
 *         description: Subcategory active status toggled successfully
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
 *                   $ref: '#/components/schemas/Subcategory'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Subcategory not found
 *       500:
 *         description: Internal server error
 */

router.patch("/", asyncHandler(ActiveSubcategoryByIDController));
export default router;
