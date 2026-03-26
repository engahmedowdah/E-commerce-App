import { generateAccessToken } from "../../../shared/utils.js";

const GenerateAccessToken = ({ UserID }) => {
    try {
        if (!UserID) throw new Error("UserID is required");
        return generateAccessToken(UserID);
    } catch (error) {
        throw "Error generating access token";
    }
};

export default GenerateAccessToken;