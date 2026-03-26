import express from "express";
import ActiveCurrencySymbolByIDController from "../../controllers/CurrencySymbol/ActiveCurrencySymbolByID.controller.js";

const router = express.Router();

/**
 * @openapi
 * /currency-symbol/active:
 *   patch:
 *     summary: Activate a currency symbol
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
 *         description: Currency symbol activated successfully
 *       400:
 *         description: Invalid input
 */
router.patch("/active", ActiveCurrencySymbolByIDController);

export default router;
