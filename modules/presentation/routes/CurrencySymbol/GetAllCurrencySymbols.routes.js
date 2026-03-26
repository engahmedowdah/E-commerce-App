import express from "express";
import GetAllCurrencySymbolsController from "../../controllers/CurrencySymbol/GetAllCurrencySymbols.controller.js";

const router = express.Router();

/**
 * @openapi
 * /currency-symbols:
 *   get:
 *     summary: Get all currency symbols
 *     tags: [Currency Symbols]
 *     responses:
 *       200:
 *         description: Currency symbols retrieved successfully
 *       400:
 *         description: Invalid input
 *       500:
 
 */
router.get("/", GetAllCurrencySymbolsController);

export default router;
