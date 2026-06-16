import AdminModel from "../../data/Admin/Admin.model.js";
import AdminMapper from "./AdminMapper.js";
const UpdateAdmin = async ({ AdminID, FirstName, LastName, Email, Phone, UserName, Password, RoleID, ImageID, IsActivated }) => {
  const admin = await AdminModel.findById(AdminID);
  if (!admin) {
    throw new Error("Admin not found");
  }
  if (Email) {
    const existingAdmin = await AdminModel.findOne({ Email });
    if (existingAdmin && existingAdmin._id.toString() !== AdminID.toString()) {
      throw new Error("Email already exists");
    }
  }
  if (UserName) {
    const existingAdmin = await AdminModel.findOne({ UserName });
    if (existingAdmin && existingAdmin._id.toString() !== AdminID.toString()) {
      throw new Error("Username already exists");
    }
  }
  const updatedAdmin = await AdminModel.findOneAndUpdate(
    { _id: AdminID, IsDeleted: false },
    {
      FirstName: FirstName,
      LastName: LastName,
      Email: Email,
      Phone: Phone,
      UserName: UserName,
      HashedPassword: Password,
      RoleID: RoleID,
      ImageID: ImageID,
      IsActivated: IsActivated,
      UpdatedDate: new Date(),
    },
    { new: true }
  )
    .populate({
      path: "RoleID",
      populate: { path: "Permissions" }
    })
    .populate("ImageID")
    .lean();
  return await AdminMapper(updatedAdmin);
};
export default UpdateAdmin;
