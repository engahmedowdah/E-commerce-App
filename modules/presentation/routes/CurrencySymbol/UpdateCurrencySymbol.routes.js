import express from "express";
import UpdateCurrencySymbolController from "../../controllers/CurrencySymbol/UpdateCurrencySymbol.controller.js";

const router = express.Router();

/**
 * @openapi
 * /currency-symbol:
 *   put:
 *     summary: Update a currency symbol
 *     tags: [Currency Symbols]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CurrencySymbolID: { type: "string" }
 *               CountryID: { type: "string" }
 *               CurrencySymbol: { type: "string" }
 *               AdminId: { type: "string" }
 *     responses:
 *       200:
 *         description: Currency symbol updated successfully
 *       400:
 *         description: Invalid input
 */
router.put("/", UpdateCurrencySymbolController);

export default router;
