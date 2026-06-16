import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import GetCountryByIDController from "../../../controllers/Country/GetCountryByID.controller.js";
const router = express.Router();
/**
 * @swagger
 * /country:
 *   get:
 *     summary: Get Country by ID
 *     tags: [Countries]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           example: "6535c90b3d7b3110acb4d24c"
 *         description: The resource ID
 *     responses:
 *       200:
 *         description: Country found
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
 *       404:
 *         description: Not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */

router.get("/", asyncHandler(GetCountryByIDController));
export default router;
