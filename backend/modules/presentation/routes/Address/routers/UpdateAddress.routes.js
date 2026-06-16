import express from "express";
import UpdateAddressController from "../../../controllers/Address/UpdateAddress.controller.js";
const router = express.Router();
/**
 * @swagger
 * /address:
 *   put:
 *     summary: Update Address
 *     tags: [Addresses]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - AddressID
 *             properties:
 *               AddressID:
 *                 type: string
 *                 description: The ID of the address to update
 *               UserID:
 *                 type: string
 *                 description: The ID of the user owning the address
 *               CityID:
 *                 type: string
 *                 description: New City ID
 *               CountryID:
 *                 type: string
 *                 description: New Country ID
 *               AddressLine1:
 *                 type: string
 *                 description: New Address Line 1
 *               AddressLine2:
 *                 type: string
 *                 description: New Address Line 2
 *               PostalCode:
 *                 type: string
 *                 description: New Postal Code
 *               IsDefault:
 *                 type: boolean
 *                 description: Set as default address
 *             example:
 *               Name: "Office"
 *               AddressLine1: "456 Prince Sultan Street"
 *               AddressLine2: "Floor 3, Tower B"
 *               CityID: "6535c90b3d7b3110acb4d24c"
 *               CountryID: "6535c90b3d7b3110acb4d24d"
 *               PostalCode: "54321"
 *               IsDefault: false
 *     responses:
 *       200:
 *         description: Address updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: boolean }
 *                 message: { type: string }
 *                 data:
 *                   $ref: '#/components/schemas/Address'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal server error
 */

router.put("/", UpdateAddressController);
export default router;
