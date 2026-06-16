import PermissionModel from "../../data/Permission/Permission.model.js";
const ActivePermissionByID = async ({ PermissionID }) => {
    const permission = await PermissionModel.findOne({ _id: PermissionID, IsDeleted: false });
    if (!permission) throw new Error("Permission not found");
    const updatedDoc = await PermissionModel.findOneAndUpdate(
        { _id: PermissionID, IsDeleted: false },
        [{ $set: { IsActivated: { $not: "$IsActivated" } } }],
        { new: true, updatePipeline: true }
    );
    if (!updatedDoc) throw new Error("Permission not updated");
    return updatedDoc;
};
export default ActivePermissionByID;
