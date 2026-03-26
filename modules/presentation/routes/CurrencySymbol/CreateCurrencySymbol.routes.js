import express from "express";
import CreateCurrencySymbolController from "../../controllers/CurrencySymbol/CreateCurrencySymbol.controller.js";

const router = express.Router();

/**
 * @openapi
 * /currency-symbol:
 *   post:
 *     summary: Create a new currency symbol
 *     tags: [Currency Symbols]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CountryID: { type: "string" }
 *               CurrencySymbol: { type: "string" }
 *               AdminId: { type: "string" }
 *     responses:
 *       201:
 *         description: Currency symbol created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/", CreateCurrencySymbolController);

export default router;
