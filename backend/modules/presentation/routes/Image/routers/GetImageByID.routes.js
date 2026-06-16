import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import GetImageByIDController from "../../../controllers/Image/GetImageByID.controller.js";
const router = express.Router();
/**
 * @swagger
 * /image:
 *   get:
 *     summary: Get image by ID
 *     tags: [Images]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - ImageID
 *             properties:
 *               ImageID:
 *                 type: string
 *                 description: The image ID to fetch
 *             example:
 *               ImageID: "6535c90b3d7b3110acb4d24c"
 *     responses:
 *       200:
 *         description: Image fetched successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Image not found
 *       500:
 *         description: Internal server error
 */
router.get("/", asyncHandler(GetImageByIDController));
export default router;
