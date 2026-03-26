import { generateRefreshToken } from "../../../shared/utils.js";

const GenerateRefreshToken = ({ UserID }) => {
    try {
        if (!UserID) throw new Error("UserID is required");
        return generateRefreshToken(UserID);
    } catch (error) {
        throw "Error generating refresh token";
    }
};

export default GenerateRefreshToken;
