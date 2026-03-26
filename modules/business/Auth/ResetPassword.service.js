import UserModel from "../../data/User/User.model.js";
import PersonModel from "../../data/Person/Person.model.js";

const ResetPassword = async ({ Email, OldPassword, NewPassword }) => {
  try {
    if (!Email || !OldPassword || !NewPassword) {
      throw new Error("Missing required fields");
    }
    const person = await PersonModel.findOne({ Email }).select("+HashedPassword");
    if (!person) throw new Error("User not found");

    const isMatch = await person.comparePassword(OldPassword);
    if (!isMatch) throw new Error("Invalid old password");

    person.HashedPassword = NewPassword;
    person.UpdatedDate = Date.now();
    await person.save();

    const user = await UserModel.findOne({ PersonID: person._id }).populate("PersonID");
    return user;
  } catch (error) {
    throw "Error resetting password";
  }
};

export default ResetPassword;
