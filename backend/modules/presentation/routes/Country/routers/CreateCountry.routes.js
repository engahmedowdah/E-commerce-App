import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import CreateCountryController from "../../../controllers/Country/CreateCountry.controller.js";
const router = express.Router();
/**
 * @swagger
 * /country:
 *   post:
 *     summary: Create a new Country
 *     tags: [Countries]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Country'
 *             example:
 *               Name: "Saudi Arabia"
 *               Slug: "saudi-arabia"
 *               CurrencySymbolID: "6535c90b3d7b3110acb4d24c"
 *     responses:
 *       201:
 *         description: Country created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *                 data:
 *                   $ref: '#/components/schemas/Country'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

router.post("/", asyncHandler(CreateCountryController));
export default router;
