import PersonModel from "../../data/Person/Person.model.js";

const UpdatePerson = async ({ PersonID }, { FirstName, LastName, Email, UpdatedBy }) => {
  try {
    if (!PersonID) throw new Error("Missing required fields");
    const person = await PersonModel.findById(PersonID);
    if (!person) throw new Error("Person not found");
    if (FirstName || LastName || Email) {
      person.FirstName = FirstName;
      person.LastName = LastName;
      person.Email = Email;
      person.UpdatedBy = UpdatedBy;
      person.UpdatedDate = Date.now();
      await person.save();
    }
    return person;
  } catch (error) {
    throw "Error updating person";
  }
};
export default UpdatePerson;
