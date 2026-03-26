import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import DeleteCityController from "../../controllers/City/DeleteCity.controller.js";

const router = express.Router();

/**
 * @openapi
 * /city:
 *   delete:
 *     summary: Delete a city by ID
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
 *         description: City deleted successfully
 *       400:
 *         description: Failed to delete city
 */
router.delete("/", asyncHandler(DeleteCityController));

export default router;
