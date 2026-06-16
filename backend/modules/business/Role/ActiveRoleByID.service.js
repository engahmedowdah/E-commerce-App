import RoleModel from "../../data/Role/Role.model.js";
const ActiveRoleByID = async ({ RoleID }) => {
    const role = await RoleModel.findOne({ _id: RoleID, IsDeleted: false });
    if (!role) throw new Error("Role not found");
    const updatedDoc = await RoleModel.findOneAndUpdate(
        { _id: RoleID, IsDeleted: false },
        [{ $set: { IsActivated: { $not: "$IsActivated" } } }],
        { new: true, updatePipeline: true }
    );
    if (!updatedDoc) throw new Error("Role not updated");
    return updatedDoc;
};
export default ActiveRoleByID;
