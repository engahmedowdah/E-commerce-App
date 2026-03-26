import UserModel from "../../data/User/User.model.js";
const ActiveUserByID = async ({ UserID, UpdatedBy }) => {
    try {
        if (!UserID || !UpdatedBy) throw new Error("Missing required fields");
        const user = await UserModel.findById(UserID);

        if (!user) throw new Error("User not found");

        user.IsActivated = !user.IsActivated;
        user.UpdatedBy = UpdatedBy;
        user.UpdatedDate = Date.now();

        await user.save();

        return user;
    } catch (error) {
        throw "Error activating user";
    }
};
export default ActiveUserByID;
