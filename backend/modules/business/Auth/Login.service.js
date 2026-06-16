import UserModel from "../../data/User/User.model.js";
const Login = async ({ Email, Password }) => {
  const user = await UserModel.findOne(
    { Email: Email }
  ).select("+HashedPassword");
  if (!user) throw new Error("User not found");
  const isMatch = await user.comparePassword(Password);
  if (!isMatch) throw new Error("Invalid password");
  return user;
};
export default Login;
