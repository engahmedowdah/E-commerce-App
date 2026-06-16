import jwt from "jsonwebtoken";
const VerifyRefreshToken = ({ Token }) => {
    const payload = jwt.verify(Token, process.env.JWT_REFRESH_SECRET);
    if (!payload) throw new Error("Token not verified");
    return payload;
};
export default VerifyRefreshToken;
