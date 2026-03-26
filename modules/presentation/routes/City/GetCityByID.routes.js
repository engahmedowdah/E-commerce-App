import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import GetCityByIDController from "../../controllers/City/GetCityByID.controller.js";

const router = express.Router();

/**
 * @openapi
 * /city:
 *   get:
 *     summary: Get a city by ID
 *     tags: [City]
 *     parameters:
 *       - in: query
 *         name: cityID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: City fetched successfully
 *       404:
 *         description: City not found
 */
router.get("/", asyncHandler(GetCityByIDController));

export default router;
