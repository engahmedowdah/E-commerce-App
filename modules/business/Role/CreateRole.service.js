import RoleModel from "../../data/Role/Role.model.js";
const CreateRole = async ({ Name, Permissions, Description, IsActivated, CreatedBy }) => {
  try {
    if (!Name || !Permissions || !Description || !IsActivated || !CreatedBy) throw new Error("Missing required fields");
    const role = await RoleModel.create(
      {
        Name,
        Permissions,
        Description,
        IsActivated: IsActivated || false,
        CreatedBy,
        CreatedDate: Date.now(),
      }
    );

    if (!role) throw new Error("Role not found");

    return role;
  } catch (error) {
    throw "Error creating role";
  }
};
export default CreateRole;
