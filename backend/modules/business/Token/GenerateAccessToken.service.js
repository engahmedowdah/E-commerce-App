import { generateAccessToken } from "../../../shared/utils.js";
const GenerateAccessToken = ({ UserID }) => {
    const token = generateAccessToken(UserID);
    if (!token) throw new Error("Token not generated");
    return token;
};
export default GenerateAccessToken;
