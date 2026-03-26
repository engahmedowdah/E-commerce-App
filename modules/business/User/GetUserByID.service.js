import UserModel from "../../data/User/User.model.js";
import { NotDeletedFilter } from "../../../shared/utils.js";
const GetUserByID = async ({ UserID, IncludeDeleted = false }) => {
    try {
        if (!UserID) throw new Error("Missing required fields");
        const user = await UserModel.findOne(
            {
                _id: UserID,
                ...NotDeletedFilter(IncludeDeleted)
            }).populate("PersonID", "-HashedPassword");

        if (!user) throw new Error("User not found");

        return user;
    } catch (error) {
        throw "Error getting user";
    }
};
export default GetUserByID;
