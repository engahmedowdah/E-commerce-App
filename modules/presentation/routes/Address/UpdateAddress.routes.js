import express from "express";
import UpdateAddressController from "../../controllers/Address/UpdateAddress.controller.js";

const router = express.Router();

/**
 * @openapi
 * /address:
 *   put:
 *     summary: Update an address by ID
 *     tags: [Addresses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               AddressID: { type: "string" }
 *               AddressLine1: { type: "string" }
 *               AddressLine2: { type: "string" }
 *               CityID: { type: "string" }
 *               CountryID: { type: "string" }
 *               PostalCode: { type: "string" }
 *               IsDefault: { type: "boolean" }
 *     responses:
 *       200:
 *         description: Address updated successfully
 *       400:
 *         description: Failed to update address
 */
router.put("/", UpdateAddressController);

export default router;
