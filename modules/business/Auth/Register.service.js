import PersonModel from "../../data/Person/Person.model.js";
import UserModel from "../../data/User/User.model.js";

const Register = async ({ FirstName, LastName, Email, Password }) => {
  try {
    if (!FirstName || !LastName || !Email || !Password) {
      throw new Error("Missing required fields");
    }
    const person = await PersonModel.create({
      FirstName,
      LastName,
      Email,
      HashedPassword: Password,
      CreatedDate: Date.now(),
    });
    const user = await UserModel.create({
      PersonID: person._id,
      CreatedDate: Date.now(),
    });
    return user;
  } catch (error) {
    throw "Error registering user";
  }
};

export default Register;
