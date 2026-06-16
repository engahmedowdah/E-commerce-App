import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import upload from "../../../../../middlewares/upload.middleware.js";
import ChangeImageController from "../../../controllers/Image/ChangeImage.controller.js";
const router = express.Router();
/**
 * @swagger
 * /image/change:
 *   put:
 *     summary: Change existing image
 *     tags: [Images]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - OldImageID
 *               - image
 *             properties:
 *               OldImageID:
 *                 type: string
 *                 description: The old image ID to be replaced
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: The new image file to upload
 *             example:
 *               OldImageID: "6535c90b3d7b3110acb4d24c"
 *     responses:
 *       200:
 *         description: Image replaced successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.put("/", upload.single("image"), asyncHandler(ChangeImageController));
export default router;
