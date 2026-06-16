import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import GetCountryBySlugController from "../../../controllers/Country/GetCountryBySlug.controller.js";
const router = express.Router();
/**
 * @swagger
 * /country/slug:
 *   get:
 *     summary: Get Country by slug
 *     tags: [Countries]
 *     parameters:
 *       - in: query
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *           example: "my-resource-slug"
 *         description: The resource slug
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
 *       500:
 *         description: Internal server error
 */

router.get("/", asyncHandler(GetCountryBySlugController));
export default router;
