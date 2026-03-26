import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import GetAllCitiesController from "../../controllers/City/GetAllCities.controller.js";

const router = express.Router();

/**
 * @openapi
 * /cities:
 *   get:
 *     summary: Get all cities
 *     tags: [City]
 *     responses:
 *       200:
 *         description: List of cities
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/City'
 */
router.get("/", asyncHandler(GetAllCitiesController));

export default router;
