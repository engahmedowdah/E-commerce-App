const AdminMapper = (admin) => {
  if (!admin) return null;
  const adminObj = typeof admin.toObject === "function" ? admin.toObject() : admin;
  const mapped = {
    ...adminObj,
  };
  if (adminObj.RoleID && typeof adminObj.RoleID === "object") {
    mapped.Role = adminObj.RoleID;
    mapped.RoleID = adminObj.RoleID._id.toString();
  }
  if (adminObj.ImageID && typeof adminObj.ImageID === "object") {
    mapped.Image = adminObj.ImageID;
    mapped.ImageID = adminObj.ImageID._id.toString();
  }
  mapped.Password = undefined;
  mapped.HashedPassword = undefined;
  return mapped;
};
export default AdminMapper;
