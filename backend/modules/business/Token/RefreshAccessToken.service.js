import { generateRefreshToken } from "../../../shared/utils.js";
const RefreshAccessToken = ({ UserID }) => {
    const token = generateRefreshToken(UserID);
    if (!token) throw new Error("Token not generated");
    return token;
};
export default RefreshAccessToken;
