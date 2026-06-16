import UserModel from "../../data/User/User.model.js";
const Register = async ({ FirstName, LastName, Email, Phone, Password }) => {
  const existingUser = await UserModel.findOne({ $or: [{ Email }, { Phone }] });
  if (existingUser) {
    throw new Error("Email or Phone is already registered");
  }
  const user = await UserModel.create({
    FirstName: FirstName,
    LastName: LastName,
    Email: Email,
    Phone: Phone,
    HashedPassword: Password,
    CreatedDate: Date.now(),
  });
  return user;
};
export default Register;
