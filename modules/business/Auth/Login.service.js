import UserModel from "../../data/User/User.model.js";
import PersonModel from "../../data/Person/Person.model.js";

const Login = async ({ Email, Password }) => {
  try {
    if (!Email || !Password) {
      throw new Error("Missing required fields");
    }
    const person = await PersonModel.findOne(
      { Email: Email }
    ).select("+HashedPassword");
    if (!person) throw new Error("User not found");

    const isMatch = await person.comparePassword(Password);
    if (!isMatch) throw new Error("Invalid password");

    const user = await UserModel.findOne(
      { PersonID: person._id }
    ).populate("PersonID");

    if (!user) throw new Error("User account not found");

    return user;
  } catch (error) {
    throw "Error logging in";
  }
};

export default Login;
