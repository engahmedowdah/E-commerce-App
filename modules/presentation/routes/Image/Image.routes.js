import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import upload from "../../../../middlewares/upload.middleware.js";
import UploadProductImageController from "../../controllers/Image/UploadProductImage.controller.js";
import UploadUserLogoController from "../../controllers/Image/UploadUserLogo.controller.js";
import GetImageByIDController from "../../controllers/Image/GetImageByID.controller.js";
import GetImagesByProductIDController from "../../controllers/Image/GetImagesByProductID.controller.js";
import DeleteImageController from "../../controllers/Image/DeleteImage.controller.js";
import ChangeImageController from "../../controllers/Image/ChangeImage.controller.js";

const router = express.Router();

// Uploads
/**
 * @openapi
 * /image/product/:productId:
 *   post:
 *     summary: Upload a product image
 *     tags: [Image]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image: { type: "string", format: "binary" }
 *     responses:
 *       201:
 *         description: Image uploaded successfully
 *       400:
 *         description: Invalid input
 */
router.post("/product/:productId", upload.single("image"), asyncHandler(UploadProductImageController));
/**
* @openapi
 * /image/user/:userId:
 *   post:
 *     summary: Upload a user logo
 *     tags: [Image]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image: { type: "string", format: "binary" }
 *     responses:
 *       201:
 *         description: Image uploaded successfully
 *       400:
 *         description: Invalid input
 */
router.post("/user/:userId", upload.single("image"), asyncHandler(UploadUserLogoController));

// Management
/**
 * @openapi
 * /image/change/:oldImageId:
 *   put:
 *     summary: Change an image
 *     tags: [Image]
 *     parameters:
 *       - in: path
 *         name: oldImageId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image: { type: "string", format: "binary" }
 *     responses:
 *       200:
 *         description: Image changed successfully
 *       400:
 *         description: Invalid input
 */
router.put("/change/:oldImageId", upload.single("image"), asyncHandler(ChangeImageController));
/**
 * @openapi
 * /image/:id:
 *   get:
 *     summary: Get an image by ID
 *     tags: [Image]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Image fetched successfully
 *       404:
 *         description: Image not found
 */
router.get("/:id", asyncHandler(GetImageByIDController));
/**
 * @openapi
 * /image/product/:productId:
 *   get:
 *     summary: Get images by product ID
 *     tags: [Image]
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of images for the product
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Image'
 */
router.get("/product/:productId", asyncHandler(GetImagesByProductIDController));
/**
 * @openapi
 * /image/:id:
 *   delete:
 *     summary: Delete an image by ID
 *     tags: [Image]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Image deleted successfully
 *       400:
 *         description: Failed to delete image
 */
router.delete("/:id", asyncHandler(DeleteImageController));

export default router;
