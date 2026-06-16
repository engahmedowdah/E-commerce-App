import mongoose from "mongoose";
import CollectionModel from "../../data/Collection/Collection.model.js";
import CollectionMapper from "./CollectionMapper.js";
const GetCollectionByID = async ({ CollectionID }) => {
  if (!mongoose.Types.ObjectId.isValid(CollectionID)) {
    return null;
  }
  const collection = await CollectionModel.findOne({ _id: CollectionID, IsDeleted: false }).lean();
  if (!collection) return null;
  return await CollectionMapper(collection);
};
export default GetCollectionByID;
