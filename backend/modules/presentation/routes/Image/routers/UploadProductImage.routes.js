import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import upload from "../../../../../middlewares/upload.middleware.js";
import UploadProductImageController from "../../../controllers/Image/UploadProductImage.controller.js";
const router = express.Router();
/**
 * @swagger
 * /images/product:
 *   post:
 *     summary: Upload product image
 *     tags: [Images]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - ProductID
 *               - image
 *             properties:
 *               ProductID:
 *                 type: string
 *                 description: The product ID to upload image for
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: The image file to upload
 *             example:
 *               ProductID: "6535c90b3d7b3110acb4d24c"
 *     responses:
 *       201:
 *         description: Product image uploaded successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/", upload.single("image"), asyncHandler(UploadProductImageController));
export default router;
