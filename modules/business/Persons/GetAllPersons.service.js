import UserModel from "../../data/User/User.model.js";
import { NotDeletedFilter } from "../../../shared/utils.js";
const GetAllUsers = async ({ includeDeleted = false }) => {
  try {
    const users = await UserModel.find(NotDeletedFilter(includeDeleted))
      .populate("-HashedPassword");

    if (!users) throw new Error("Users not found");

    return users;
  } catch (error) {
    throw "Error getting users";
  }
};
export default GetAllUsers;
