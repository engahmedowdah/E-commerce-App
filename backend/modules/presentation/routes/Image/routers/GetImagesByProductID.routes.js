import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import GetImagesByProductIDController from "../../../controllers/Image/GetImagesByProductID.controller.js";
const router = express.Router();
/**
 * @swagger
 * /images/product:
 *   get:
 *     summary: Get images by product ID
 *     tags: [Images]
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
 *                 description: The product ID to fetch images for
 *             example:
 *               ProductID: "6535c90b3d7b3110acb4d24c"
 *     responses:
 *       200:
 *         description: Images retrieved successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.get("/", asyncHandler(GetImagesByProductIDController));
export default router;
