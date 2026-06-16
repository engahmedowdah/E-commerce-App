import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import ActiveCityByIDController from "../../../controllers/City/ActiveCityByID.controller.js";
const router = express.Router();
/**
 * @swagger
 * /city/active:
 *   patch:
 *     summary: Toggle active status of City
 *     tags: [Cities]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - CityID
 *             properties:
 *               CityID:
 *                 type: string
 *                 description: The City ID to toggle active status
 *             example:
 *               CityID: "6535c90b3d7b3110acb4d24c"
 *     responses:
 *       200:
 *         description: City active status toggled successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/City'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: City not found
 *       500:
 *         description: Internal server error
 */

router.patch("/", asyncHandler(ActiveCityByIDController));
export default router;
