import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import ActiveProductByIDController from "../../../controllers/Product/ActiveProductByID.controller.js";
const router = express.Router();
/**
 * @swagger
 * /product/active:
 *   patch:
 *     summary: Toggle active status of Product
 *     tags: [Products]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - ProductID
 *             properties:
 *               ProductID:
 *                 type: string
 *                 description: The Product ID to toggle active status
 *             example:
 *               ProductID: "6535c90b3d7b3110acb4d24c"
 *     responses:
 *       200:
 *         description: Product active status toggled successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *                 data:
 *                   $ref: '#/components/schemas/Product'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */

router.patch("/", asyncHandler(ActiveProductByIDController));
export default router;
