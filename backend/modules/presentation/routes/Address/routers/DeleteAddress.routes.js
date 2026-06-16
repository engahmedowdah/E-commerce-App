import express from "express";
import DeleteAddressController from "../../../controllers/Address/DeleteAddress.controller.js";
const router = express.Router();
/**
 * @swagger
 * /address:
 *   delete:
 *     summary: Delete an Address
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
 *                 description: The ID of the address to delete
 *             example:
 *               AddressID: "6535c90b3d7b3110acb4d24c"
 *     responses:
 *       200:
 *         description: Address deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: { type: 'boolean' }
 *                 message: { type: 'string' }
 *                 data: { $ref: '#/components/schemas/Address' }
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       500:
 *         description: Internal server error
 */
router.delete("/", DeleteAddressController);
export default router;
