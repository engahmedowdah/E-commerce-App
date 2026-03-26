import express from "express";
import GetAllCollectionsController from "../../controllers/Collection/GetAllCollections.controller.js";

const router = express.Router();

/**
 * @openapi
 * /collections:
 *   get:
 *     summary: Get all collections
 *     tags: [Collection]
 *     responses:
 *       200:
 *         description: List of collections
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Collection'
 */
router.get("/", GetAllCollectionsController);

export default router;
