import RefreshTokenModel from "../../data/RefreshToken/RefreshToken.model.js";
const DeleteRefreshToken = async ({ Token }) => {
    try {
        if (!Token) throw new Error("Token is required");
        return await RefreshTokenModel.deleteMany(
            {
                tokenHash: Token
            });
    } catch (error) {
        throw "Error deleting refresh token";
    }
};

export default DeleteRefreshToken;
