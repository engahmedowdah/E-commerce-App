import UserModel from "../../data/User/User.model.js";
const UpdateUser = async ({ UserID, IsActivated, FirstName, LastName, Email, Phone, Password }) => {
    const user = await UserModel.findOne({ _id: UserID, IsDeleted: false });
    if (!user) throw new Error("User not found");
    const updatedUser = await UserModel.findByIdAndUpdate(UserID, { FirstName: FirstName, LastName: LastName, Email: Email, HashedPassword: Password, Phone: Phone, UpdatedDate: Date.now(), IsActivated: IsActivated }, { new: true });
    if (!updatedUser) throw new Error("User not updated");
    return updatedUser;
};
export default UpdateUser;
