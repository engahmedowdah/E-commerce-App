import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import GetAllCountriesController from "../../controllers/Country/GetAllCountries.controller.js";

const router = express.Router();

/**
 * @openapi
 * /countries:
 *   get:
 *     summary: Get all countries
 *     tags: [Country]
 *     responses:
 *       200:
 *         description: List of countries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Country'
 */
router.get("/", asyncHandler(GetAllCountriesController));

export default router;
