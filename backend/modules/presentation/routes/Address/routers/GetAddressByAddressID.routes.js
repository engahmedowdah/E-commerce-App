import express from "express";
import { asyncHandler } from "../../../../../middlewares/asyncHandler.js";
import GetAddressByAddressIDController from "../../../controllers/Address/GetAddressByAddressID.controller.js";
const router = express.Router();
/**
 * @swagger
 * /address:
 *   get:
 *     summary: Get Address by Address ID
 *     tags: [Addresses]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: AddressID
 *         required: true
 *         schema:
 *           type: string
 *           example: "6535c90b3d7b3110acb4d24c"
 *         description: The ID of the address to fetch
 *     responses:
 *       200:
 *         description: Address fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Address'
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Address not found
 *       500:
 *         description: Internal server error
 */
router.get("/", asyncHandler(GetAddressByAddressIDController));
export default router;
