import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import CreateCountryController from "../../controllers/Country/CreateCountry.controller.js";

const router = express.Router();

/**
 * @openapi
 * /country:
 *   post:
 *     summary: Create a new country
 *     tags: [Country]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CountryName: { type: "string" }
 *               Description: { type: "string" }
 *     responses:
 *       201:
 *         description: Country created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/", asyncHandler(CreateCountryController));

export default router;
