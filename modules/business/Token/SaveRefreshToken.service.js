import RefreshTokenModel from "../../data/RefreshToken/RefreshToken.model.js";

const SaveRefreshToken = async ({ UserID, Token, ExpiresAt, CreatedBy }) => {
    try {
        if (!UserID || !Token || !ExpiresAt) {
            throw new Error("UserID, Token, and ExpiresAt are required");
        }
        return await RefreshTokenModel.create({
            UserID,
            Token,
            ExpiresAt,
            CreatedBy: CreatedBy
        });
    } catch (error) {
        throw "Error saving refresh token";
    }
};

export default SaveRefreshToken;

