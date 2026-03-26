import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import GetCountryByIDController from "../../controllers/Country/GetCountryByID.controller.js";

const router = express.Router();

/**
 * @openapi
 * /country:
 *   get:
 *     summary: Get a country by ID
 *     tags: [Country]
 *     parameters:
 *       - in: query
 *         name: countryID
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Country fetched successfully
 *       404:
 *         description: Country not found
 */
router.get("", asyncHandler(GetCountryByIDController));

export default router;