import PersonModel from "../../data/Person/Person.model.js";
import { NotDeletedFilter } from "../../../shared/utils.js";
const GetPersonByID = async ({ PersonID, includeDeleted = false }) => {
  try {
    if (!PersonID) throw new Error("Missing required fields");
    const person = await PersonModel.findOne({
      _id: PersonID,
      ...NotDeletedFilter(includeDeleted)
    });

    if (!person) throw new Error("Person not found");

    return person;
  } catch (error) {
    throw "Error getting person";
  }
};
export default GetPersonByID;
