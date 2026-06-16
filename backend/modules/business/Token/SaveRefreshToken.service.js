import RefreshTokenModel from "../../data/RefreshToken/RefreshToken.model.js";
const SaveRefreshToken = async ({ UserID, Token, ExpiresAt }) => {
    const savedToken = await RefreshTokenModel.create({
        UserID: UserID,
        TokenHash: Token,
        ExpiresAt: ExpiresAt,
    });
    if (!savedToken) throw new Error("Token not saved");
    return savedToken;
};
export default SaveRefreshToken;
