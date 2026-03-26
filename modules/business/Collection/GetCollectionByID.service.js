import CollectionModel from "../../data/Collection/Collection.model.js";
import { NotDeletedFilter } from "../../../shared/utils.js";
const GetCollectionByID = async ({ CollectionID, includeDeleted = false }) => {
  try {
    if (!CollectionID) {
      throw new Error("Missing required fields");
    }
    const collection = await CollectionModel.findById(CollectionID, { ...NotDeletedFilter(includeDeleted) });

    if (!collection) {
      throw new Error("Collection not found");
    }

    return collection;
  } catch (error) {
    throw "Error getting collection";
  }
};
export default GetCollectionByID;
