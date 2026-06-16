import AdminModel from "../modules/data/Admin/Admin.model.js";
const AdminMiddleware = async (req, res, next) => {
    try {
        if (!req.user || !req.user.UserId) {
            return res.status(401).json({ Success: false, Message: "Unauthorized" });
        }
        const admin = await AdminModel.findOne({ UserID: req.user.UserId, IsDeleted: false });
        if (!admin) {
            return res.status(403).json({ Success: false, Message: "Forbidden: Admin access required" });
        }
        req.user.AdminId = admin._id;
        next();
    } catch (err) {
        return res.status(500).json({ Success: false, Message: "Server Error verifying admin permissions" });
    }
};
export default AdminMiddleware;
