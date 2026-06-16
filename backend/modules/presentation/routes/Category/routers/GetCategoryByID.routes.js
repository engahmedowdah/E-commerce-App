import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import GetCategoryByIDController from "../../../controllers/Category/GetCategoryByID.controller.js";
const router = express.Router();
/**
 * @swagger
 * /category:
 *   get:
 *     summary: Get Category by ID
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
 *         description: The resource ID
 *     responses:
 *       200:
 *         description: Category found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Category'
 *       404:
 *         description: Not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

router.get("/", asyncHandler(GetCategoryByIDController));
export default router;
