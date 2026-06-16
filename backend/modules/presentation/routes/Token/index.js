import express from "express";
import router from "./routers/Token.routes.js";
const token = express.Router();
token.use("/", router);
export { token };
