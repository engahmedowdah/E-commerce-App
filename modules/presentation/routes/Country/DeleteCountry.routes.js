import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import DeleteCountryController from "../../controllers/Country/DeleteCountry.controller.js";

const router = express.Router();

/**
 * @openapi
 * /country:
 *   delete:
 *     summary: Delete a country by ID
 *     tags: [Country]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CountryID: { type: "string" }
 *     responses:
 *       200:
 *         description: Country deleted successfully
 *       400:
 *         description: Failed to delete country
 */
router.delete("/", asyncHandler(DeleteCountryController));

export default router;