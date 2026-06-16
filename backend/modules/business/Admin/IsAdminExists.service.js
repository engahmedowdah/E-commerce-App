import AdminModel from "../../data/Admin/Admin.model.js";
const IsAdminExists = async ({ AdminID }) => {
  const exists = await AdminModel.exists({
    _id: AdminID,
    IsDeleted:false
  });
  if(!exists)
    throw Error("Admin not found");
  return exists;
};
export default IsAdminExists;
