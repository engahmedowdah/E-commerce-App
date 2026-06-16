import RefreshTokenModel from "../../data/RefreshToken/RefreshToken.model.js";
const DeleteRefreshToken = async ({ Token }) => {
    const deletedToken = await RefreshTokenModel.deleteMany(
        {
            tokenHash: Token
        });
    if (!deletedToken) throw new Error("Token not deleted");
    return deletedToken;
};
export default DeleteRefreshToken;
