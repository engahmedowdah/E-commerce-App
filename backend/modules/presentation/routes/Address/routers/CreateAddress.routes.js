import express from "express";
import CreateAddressController from "../../../controllers/Address/CreateAddress.controller.js";
const router = express.Router();
/**
 * @swagger
 * /address:
 *   post:
 *     summary: Create a new Address
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
 *               - Name
 *               - AddressLine1
 *               - AddressLine2
 *               - CityID
 *               - CountryID
 *               - PostalCode
 *               - IsDefault
 *             properties:
 *               Name: { type: "string", maxLength: 50 }
 *               AddressLine1: { type: "string", maxLength: 200 }
 *               AddressLine2: { type: "string", maxLength: 200 }
 *               CityID: { type: "string", maxLength: 24 }
 *               CountryID: { type: "string", maxLength: 24 }
 *               PostalCode: { type: "string", maxLength: 10, pattern: '^[0-9]{5}$' }
 *               IsDefault: { type: boolean }
 *             example:
 *               Name: "Home"
 *               AddressLine1: "123 King Fahd Road"
 *               AddressLine2: "Apt 4B, Al Olaya District"
 *               CityID: "6535c90b3d7b3110acb4d24c"
 *               CountryID: "6535c90b3d7b3110acb4d24d"
 *               PostalCode: "12345"
 *               IsDefault: true
 *     responses:
 *       201:
 *         description: Address created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: 'boolean' }
 *                 message: { type: 'string' }
 *                 data: { $ref: '#/components/schemas/Address' }
 *       400:
 *         description: Invalid request
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
router.post("/", CreateAddressController);
export default router;
