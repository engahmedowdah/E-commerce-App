import RefreshTokenModel from "../../data/RefreshToken/RefreshToken.model.js";
import { NotDeletedFilter } from "../../../shared/utils.js";
const IsTokenExists = async ({ TokenID }) => {
  const exists = await RefreshTokenModel.exists({
    _id: TokenID,
    ...NotDeletedFilter(false)
  });
  if (!exists) throw new Error("Token not found");
  return !!exists;
};
export default IsTokenExists;
