import UserModel from "../../data/User/User.model.js";
import { SoftDeleteById } from "../../../shared/dbUtils.js";
const DeleteUser = async ({ UserID }) => {
    const deletedUser = await SoftDeleteById(UserModel, UserID);
    if (!deletedUser) throw new Error("User not found");
    return deletedUser;
};
export default DeleteUser;
