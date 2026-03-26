import express from "express";
import GetUserAddressByIDController from "../../controllers/Address/GetUserAddressByID.controller.js";

const router = express.Router();

/**
 * @openapi
 * /address:
 *   get:
 *     summary: Get a user address by ID
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
 *         description: Address fetched successfully
 *       404:
 *         description: Address not found
 */
router.get("/", GetUserAddressByIDController);

export default router;
