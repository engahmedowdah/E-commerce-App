import UserModel from "../../data/User/User.model.js";
const VerifyUser = async ({ UserID }) => {
    const updatedDoc = await UserModel.findOneAndUpdate(
        { _id: UserID, IsDeleted: false },
        [{ $set: { IsActivated: { $not: "$IsActivated" } } }],
        { new: true, updatePipeline: true }
    );
    if (!updatedDoc) throw new Error("User not found");
    return updatedDoc;
};
export default VerifyUser;
