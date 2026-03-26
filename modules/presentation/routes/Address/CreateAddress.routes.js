import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import CreateAddressController from "../../controllers/Address/CreateAddress.controller.js";

const router = express.Router();

/**
 * @openapi
 * /address:
 *   post:
 *     summary: Create a new address
 *     tags: [Addresses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               UserID: { type: "string" }
 *               AddressLine1: { type: "string" }
 *               AddressLine2: { type: "string" }
 *               CityID: { type: "string" }
 *               CountryID: { type: "string" }
 *               PostalCode: { type: "string" }
 *               IsDefault: { type: "boolean" }
 *     responses:
 *       201:
 *         description: Address created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/", asyncHandler(CreateAddressController));

export default router;
