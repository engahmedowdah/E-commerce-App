import PermissionMapper from "../Permission/PermissionMapper.js";
const RoleMapper = (role) => {
  if (!role) return null;
  const roleObj = typeof role.toObject === "function" ? role.toObject() : role;
  const {
    CreatedBy,
    UpdatedBy,
    UpdatedDate,
    __v,
    ...roleRest
  } = roleObj;
  const { Permissions, ...restWithoutPermissions } = roleRest;
  const mapped = {
    ...restWithoutPermissions,
  };
  if (Array.isArray(Permissions)) {
    mapped.Permissions = Permissions.map(PermissionMapper);
  } else {
    mapped.Permissions = [];
  }
  return mapped;
};
export default RoleMapper;
