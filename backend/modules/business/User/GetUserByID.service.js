import UserModel from "../../data/User/User.model.js";
import UserMapper from "./UserMapper.js";
const GetUserByID = async ({ UserID }) => {
    const user = await UserModel.findOne({
        _id: UserID,
        IsDeleted: false,
    })
    .populate("LogoID")
    .lean();
    return UserMapper(user);
};
export default GetUserByID;
