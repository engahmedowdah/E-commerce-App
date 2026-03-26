import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import UpdateCityController from "../../controllers/City/UpdateCity.controller.js";

const router = express.Router();

/**
 * @openapi
 * /city:
 *   put:
 *     summary: Update a city by ID
 *     tags: [City]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CityID: { type: "string" }
 *               CityName: { type: "string" }
 *               Description: { type: "string" }
 *     responses:
 *       200:
 *         description: City updated successfully
 *       400:
 *         description: Failed to update city
 */
router.put("/", asyncHandler(UpdateCityController));

export default router;
