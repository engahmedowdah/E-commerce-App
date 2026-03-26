import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import UpdateCountryController from "../../controllers/Country/UpdateCountry.controller.js";

const router = express.Router();

/**
 * @openapi
 * /country:
 *   put:
 *     summary: Update a country by ID
 *     tags: [Country]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CountryID: { type: "string" }
 *               CountryName: { type: "string" }
 *               Description: { type: "string" }
 *     responses:
 *       200:
 *         description: Country updated successfully
 *       400:
 *         description: Failed to update country
 */
router.put("/", asyncHandler(UpdateCountryController));

export default router;