import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import upload from "../../../../../middlewares/upload.middleware.js";
import UploadUserLogoController from "../../../controllers/Image/UploadUserLogo.controller.js";
const router = express.Router();
/**
 * @swagger
 * /image/user:
 *   post:
 *     summary: Upload user logo
 *     tags: [Images]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - UserID
 *               - image
 *             properties:
 *               UserID:
 *                 type: string
 *                 description: The user ID to upload logo for
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: The image file to upload
 *             example:
 *               UserID: "6535c90b3d7b3110acb4d24c"
 *     responses:
 *       201:
 *         description: User logo uploaded successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/", upload.single("image"), asyncHandler(UploadUserLogoController));
export default router;
