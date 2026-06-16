import { NoContent } from "../../../../shared/utils.js";
import RefreshToken from "../../../data/RefreshToken/RefreshToken.model.js";
export default async function LogoutController(req, res) {
  try {
    const token = req.cookies?.refreshToken;
    if (token) {
      await RefreshToken.findOneAndUpdate(
        { token },
        { isRevoked: true }
      );
    }
    res.clearCookie("refreshToken");
    return NoContent(res);
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
}
