import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import ActiveCountryByIDController from "../../controllers/Country/ActiveCountryByID.controller.js";

const router = express.Router();

/**
 * @openapi
 * /country/active:
 *   patch:
 *     summary: Activate a country by ID
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
 *         description: Country activated successfully
 *       400:
 *         description: Failed to activate country
 */
router.patch("/", asyncHandler(ActiveCountryByIDController));

export default router;
