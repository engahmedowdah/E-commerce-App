import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import ActiveCountryByIDController from "../../../controllers/Country/ActiveCountryByID.controller.js";
const router = express.Router();
/**
 * @swagger
 * /country/active:
 *   patch:
 *     summary: Toggle active status of Country
 *     tags: [Countries]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - CountryID
 *             properties:
 *               CountryID:
 *                 type: string
 *                 description: The Country ID to toggle active status
 *             example:
 *               CountryID: "6535c90b3d7b3110acb4d24c"
 *     responses:
 *       200:
 *         description: Country active status toggled successfully
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
 *                   $ref: '#/components/schemas/Country'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Country not found
 *       500:
 *         description: Internal server error
 */

router.patch("/", asyncHandler(ActiveCountryByIDController));
export default router;
