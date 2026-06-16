import dotenv from "dotenv";
dotenv.config();
import "./modules/data/initMongoose.js";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import apiRoutes from "./modules/presentation/routes/index.routes.js";
import "./modules/data/models.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { languageMiddleware } from "./shared/languageMiddleware.js";
const app = express();
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        "script-src": ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
      },
    },
  })
);
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true,}));
app.use((req, res, next) => {
  if (req.headers.cookie) {
    req.cookies = req.headers.cookie.split(';').reduce((cookies, item) => {
      const [name, value] = item.split('=').map(c => c.trim());
      cookies[name] = decodeURIComponent(value);
      return cookies;
    }, {});
  } else {
    req.cookies = {};
  }
  if (req.method === 'GET') {
    req.body = { ...req.body, ...req.query };
  }
  next();
});
app.use("/uploads", express.static("uploads"));
if (process.env.NODE_ENV === "development") {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(languageMiddleware);
app.use("/api/v1", apiRoutes);
app.use((req, res, next) => {
  res.status(404).json({ success: false, message: "Route not found" });
});
app.use(errorHandler);
export default app;
