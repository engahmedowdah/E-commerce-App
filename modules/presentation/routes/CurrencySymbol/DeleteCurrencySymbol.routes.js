import express from "express";
import DeleteCurrencySymbolController from "../../controllers/CurrencySymbol/DeleteCurrencySymbol.controller.js";

const router = express.Router();

/**
 * @openapi
 * /currency-symbol:
 *   delete:
 *     summary: Delete a currency symbol
 *     tags: [Currency Symbols]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               CurrencySymbolID: { type: "string" }
 *               AdminId: { type: "string" }
 *     responses:
 *       200:
 *         description: Currency symbol deleted successfully
 *       400:
 *         description: Invalid input
 */
router.delete("/", DeleteCurrencySymbolController);

export default router;
