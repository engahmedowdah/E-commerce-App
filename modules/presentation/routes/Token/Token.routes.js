import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import GenerateAccessTokenController from "../../controllers/Token/GenerateAccessToken.controller.js";
import GenerateRefreshTokenController from "../../controllers/Token/GenerateRefreshToken.controller.js";
import VerifyRefreshTokenController from "../../controllers/Token/VerifyRefreshToken.controller.js";
import SaveRefreshTokenController from "../../controllers/Token/SaveRefreshToken.controller.js";
import DeleteRefreshTokenController from "../../controllers/Token/DeleteRefreshToken.controller.js";

const router = express.Router();

/**
 * @openapi
 * /token/access-token/generate:
 *   post:
 *     summary: Generate an access token
 *     tags: [Token]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               UserID: { type: "string" }
 *     responses:
 *       200:
 *         description: Access token generated successfully
 *       400:
 *         description: Failed to generate access token
 */
router.post("/access-token/generate", asyncHandler(GenerateAccessTokenController));

/**
 * @openapi
 * /token/refresh-token/generate:
 *   post:
 *     summary: Generate a refresh token
 *     tags: [Token]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               UserID: { type: "string" }
 *     responses:
 *       200:
 *         description: Refresh token generated successfully
 *       400:
 *         description: Failed to generate refresh token
 */
router.post("/refresh-token/generate", asyncHandler(GenerateRefreshTokenController));

/**
 * @openapi
 * /token/refresh-token/verify:
 *   post:
 *     summary: Verify a refresh token
 *     tags: [Token]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               RefreshToken: { type: "string" }
 *     responses:
 *       200:
 *         description: Refresh token verified successfully
 *       400:
 *         description: Failed to verify refresh token
 */
router.post("/refresh-token/verify", asyncHandler(VerifyRefreshTokenController));

/**
 * @openapi
 * /token/refresh-token/save:
 *   post:
 *     summary: Save a refresh token
 *     tags: [Token]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               UserID: { type: "string" }
 *               RefreshToken: { type: "string" }
 *     responses:
 *       200:
 *         description: Refresh token saved successfully
 *       400:
 *         description: Failed to save refresh token
 */
router.post("/refresh-token/save", asyncHandler(SaveRefreshTokenController));

/**
 * @openapi
 * /token/refresh-token/delete:
 *   delete:
 *     summary: Delete a refresh token
 *     tags: [Token]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               RefreshToken: { type: "string" }
 *     responses:
 *       200:
 *         description: Refresh token deleted successfully
 *       400:
 *         description: Failed to delete refresh token
 */
router.delete("/refresh-token/delete", asyncHandler(DeleteRefreshTokenController));

export default router;
