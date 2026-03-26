import express from "express";
import { asyncHandler } from "../../../../middlewares/asyncHandler.js";
import GetAllCartsController from "../../controllers/Cart/GetAllCarts.controller.js";

const router = express.Router();

/**
 * @openapi
 * /carts:
 *   get:
 *     summary: Get all carts
 *     tags: [Cart]
 *     responses:
 *       200:
 *         description: Carts fetched successfully
 *       404:
 *         description: Carts not found
 */
router.get("/", GetAllCartsController);

export default router;
