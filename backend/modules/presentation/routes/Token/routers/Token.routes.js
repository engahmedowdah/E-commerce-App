import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import RefreshAccessTokenController from "../../../controllers/Token/RefreshAccessToken.controller.js";
const router = express.Router();
/**
 * @swagger
 * /token/access-token:
 *   post:
 *     summary: Refresh access token
 *     tags: [Token]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - UserID
 *             properties:
 *               UserID:
 *                 type: string
 *                 description: The user ID to refresh token for
 *             example:
 *               UserID: "6535c90b3d7b3110acb4d24c"
 *     responses:
 *       200:
 *         description: Access token refreshed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *                 data:
 *                   type: object
 *                   properties:
 *                     token: { type: string }
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/access-token", asyncHandler(RefreshAccessTokenController));
export default router;
