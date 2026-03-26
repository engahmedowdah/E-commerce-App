import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import ActiveCityByIDController from "../../controllers/City/ActiveCityByID.controller.js";

const router = express.Router();

/**
 * @openapi
 * /city/active:
 *   patch:
 *     summary: Activate a city by ID
 *     tags: [City]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CityID: { type: "string" }
 *     responses:
 *       200:
 *         description: City activated successfully
 *       400:
 *         description: Failed to activate city
 */
router.patch("/", asyncHandler(ActiveCityByIDController));

export default router;
