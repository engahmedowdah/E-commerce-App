import { NotDeletedFilter } from "../../../shared/utils.js";
import UserModel from "../../data/User/User.model.js";
const GetAllUsers = async ({ IncludeDeleted = false }) => {
    try {
        const users = await UserModel.find(
            {
                ...NotDeletedFilter(IncludeDeleted)
            }).populate("PersonID", "-HashedPassword");

        if (!users) throw new Error("Users not found");

        return users;
    } catch (error) {
        throw "Error getting all users";
    }
};
export default GetAllUsers;
