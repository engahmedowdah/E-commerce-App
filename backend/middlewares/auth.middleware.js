import jwt from "jsonwebtoken";
const AuthMiddleware = (req, res, next) => {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token)
        return res.status(401).json({ Success: false, Message: "No token provided" });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ Success: false, Message: "Invalid token" });
    }
};
export default AuthMiddleware;
