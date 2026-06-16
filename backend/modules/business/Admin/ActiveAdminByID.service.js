import AdminModel from "../../data/Admin/Admin.model.js";
import AdminMapper from "./AdminMapper.js";
const ActiveAdminByID = async ({ AdminID }) => {
    const existingAdmin = await AdminModel.findById(AdminID);
    if (!existingAdmin) return null;
    const updatedDoc = await AdminModel.findOneAndUpdate(
        { _id: AdminID, IsDeleted: false },
        [{ $set: { IsActivated: { $not: "$IsActivated" } } }],
        { new: true, updatePipeline: true }
    )
        .populate({
            path: "RoleID",
            populate: { path: "Permissions" }
        })
        .populate("ImageID")
        .lean();
    return await AdminMapper(updatedDoc);
};
export default ActiveAdminByID;
