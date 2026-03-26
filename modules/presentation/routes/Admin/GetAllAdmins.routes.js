import express from "express";
import GetAllAdminsController from "../../controllers/Admin/GetAllAdmins.controller.js";

const router = express.Router();

/**
 * @openapi
 * /admins:
 *   get:
 *     summary: Retrieve a list of all admins
 *     tags: [Admins]
 *     responses:
 *       200:
 *         description: A list of admins.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
router.get("/", GetAllAdminsController);

export default router;
