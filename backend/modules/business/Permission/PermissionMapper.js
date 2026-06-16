const PermissionMapper = (permission) => {
  if (!permission) return null;
  const permObj = typeof permission.toObject === "function" ? permission.toObject() : permission;
  const {
    CreatedBy,
    UpdatedBy,
    UpdatedDate,
    __v,
    ...permRest
  } = permObj;
  return permRest;
};
export default PermissionMapper;
