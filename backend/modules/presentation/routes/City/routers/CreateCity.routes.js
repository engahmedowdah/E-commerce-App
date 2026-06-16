import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import CreateCityController from "../../../controllers/City/CreateCity.controller.js";
const router = express.Router();
/**
 * @swagger
 * /city:
 *   post:
 *     summary: Create a new City
 *     tags: [Cities]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/City'
 *             example:
 *               Name: "Riyadh"
 *               CountryID: "6535c90b3d7b3110acb4d24c"
 *     responses:
 *       201:
 *         description: City created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *                 data:
 *                   $ref: '#/components/schemas/City'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

router.post("/", asyncHandler(CreateCityController));
export default router;
