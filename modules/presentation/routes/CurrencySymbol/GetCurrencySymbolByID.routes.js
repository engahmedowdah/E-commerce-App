import express from "express";
import GetCurrencySymbolByIDController from "../../controllers/CurrencySymbol/GetCurrencySymbolByID.controller.js";

const router = express.Router();

/**
 * @openapi
 * /currency-symbol:
 *   get:
 *     summary: Get a currency symbol by ID
 *     tags: [Currency Symbols]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CurrencySymbolID: { type: "string" }
 *     responses:
 *       200:
 *         description: Currency symbol retrieved successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error   
 */

router.get("/", GetCurrencySymbolByIDController);

export default router;
