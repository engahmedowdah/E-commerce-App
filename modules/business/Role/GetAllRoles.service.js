import { NotDeletedFilter } from "../../../shared/utils.js";
import RoleModel from "../../data/Role/Role.model.js";
const GetAllRoles = async ({ IncludeDeleted = false }) => {
  try {
    const roles = await RoleModel.find(
      {
        ...NotDeletedFilter(IncludeDeleted)
      });

    if (!roles) throw new Error("Roles not found");

    return roles;
  } catch (error) {
    throw "Error getting roles";
  }
};
export default GetAllRoles;
