import express from "express";

import GetAllCategoriesController from "../../controllers/Category/GetAllCategories.controller.js";

const router = express.Router();

/**
 * @openapi
 * /categories:
 *   get:
 *     summary: Get all categories
 *     tags: [Category]
 *     responses:
 *       200:
 *         description: Categories fetched successfully
 *       404:
 *         description: Categories not found
 */
router.get("/", GetAllCategoriesController);

export default router;
