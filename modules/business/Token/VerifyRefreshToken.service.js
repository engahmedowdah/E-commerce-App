import jwt from "jsonwebtoken";

const VerifyRefreshToken = ({ Token }) => {
    try {
        if (!Token) throw new Error("Token is required");
        const payload = jwt.verify(Token, process.env.JWT_REFRESH_SECRET);
        return payload;
    } catch (error) {
        throw "Error verifying refresh token";
    }
};

export default VerifyRefreshToken;
