import AdminModel from "../../data/Admin/Admin.model.js";
import AdminMapper from "./AdminMapper.js";
const CreateAdmin = async ({ FirstName, LastName, Email, Phone, UserName, Password, RoleID, ImageID, IsActivated }) => {
    if (Email) {
      const existingAdmin = await AdminModel.findOne({ Email });
      if (existingAdmin) {
        throw new Error("Email already exists");
      }
    }
    if (UserName) {
      const existingAdmin = await AdminModel.findOne({ UserName });
      if (existingAdmin) {
        throw new Error("Username already exists");
      }
    }
  const admin = await AdminModel.create({
    FirstName: FirstName,
    LastName: LastName,
    Email: Email,
    Phone: Phone,
    UserName: UserName,
    HashedPassword: Password,
    RoleID: RoleID,
    ImageID: ImageID,
    IsActivated: IsActivated || false,
    CreatedDate: new Date(),
  });
  const populatedAdmin = await AdminModel.findById(admin._id)
    .populate({
      path: "RoleID",
      populate: { path: "Permissions" }
    })
    .populate("ImageID")
    .lean();
  return await AdminMapper(populatedAdmin);
};
export default CreateAdmin;
