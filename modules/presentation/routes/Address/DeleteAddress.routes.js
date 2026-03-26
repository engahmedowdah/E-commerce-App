import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import DeleteAddressController from "../../controllers/Address/DeleteAddress.controller.js";

const router = express.Router();

/**
 * @openapi
 * /address:
 *   delete:
 *     summary: Delete an address by ID
 *     tags: [Addresses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               AddressID: { type: "string" }
 *     responses:
 *       200:
 *         description: Address deleted successfully
 *       400:
 *         description: Failed to delete address
 */
router.delete("/", DeleteAddressController);

export default router;
