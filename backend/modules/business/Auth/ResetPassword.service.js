import UserModel from "../../data/User/User.model.js";
const ResetPassword = async ({ Email, OldPassword, NewPassword }) => {
  const user = await UserModel.findOne({ Email }).select("+HashedPassword");
  if (!user) throw new Error("User not found");
  const isMatch = await user.comparePassword(OldPassword);
  if (!isMatch) throw new Error("Invalid old password");
  user.HashedPassword = NewPassword;
  user.UpdatedDate = Date.now();
  await user.save();
  return user;
};
export default ResetPassword;
