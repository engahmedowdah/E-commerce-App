import UserModel from "../../data/User/User.model.js";
import UpdatePerson from "../Persons/UpdatePerson.service.js";

const UpdateUser = async ({ UserID, FirstName, LastName, Email, UpdatedBy }) => {
    try {
        if (!UserID || !FirstName || !LastName || !Email || !UpdatedBy) throw new Error("Missing required fields");
        const user = await UserModel.findById(UserID);
        if (!user) throw new Error("User not found");

        if (FirstName || LastName || Email) {
            const person = await UpdatePerson({ PersonID: user.PersonID }, { FirstName, LastName, Email, UpdatedBy });

            if (!person) throw new Error("Person not found");
        }

        user.UpdatedBy = UpdatedBy;
        user.UpdatedDate = Date.now();

        await user.save();

        return await UserModel.findById(UserID).populate("PersonID", "-HashedPassword");
    } catch (error) {
        throw "Error updating user";
    }
};
export default UpdateUser;
