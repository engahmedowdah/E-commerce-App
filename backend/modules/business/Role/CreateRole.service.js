import RoleModel from "../../data/Role/Role.model.js";
const CreateRole = async ({ Name, Permissions, Description, IsActivated }) => {
  const exists = await RoleModel.findOne({ Name, IsDeleted: false });
  if (exists) throw new Error("Role already exists");
  const role = await RoleModel.create(
    {
      Name: Name,
      Permissions: Permissions,
      Description: Description,
      IsActivated: IsActivated || false,
      CreatedDate: Date.now(),
    }
  );
  if (!role) throw new Error("Role not created");
  return role;
};
export default CreateRole;
