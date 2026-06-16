import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import ConnectDatabase from "./config/database.js";
const PORT = process.env.PORT || 5002;
const startServer = async () => {
    try {
        await ConnectDatabase();
        app.listen(PORT, () => {
        });
    } catch (error) {
        process.exit(1);
    }
};
startServer();
