import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import CreateCityController from "../../controllers/City/CreateCity.controller.js";

const router = express.Router();

/**
 * @openapi
 * /city:
 *   post:
 *     summary: Create a new city
 *     tags: [City]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CityName: { type: "string" }
 *               Description: { type: "string" }
 *     responses:
 *       201:
 *         description: City created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/", asyncHandler(CreateCityController));

export default router;
