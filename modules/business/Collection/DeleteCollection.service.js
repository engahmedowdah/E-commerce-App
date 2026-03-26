import CollectionModel from "../../data/Collection/Collection.model.js";
const DeleteCollection = async ({ CollectionID, UpdatedBy }) => {
  try {
    if (!CollectionID || !UpdatedBy) {
      throw new Error("Missing required fields");
    }
    const collection = await CollectionModel.findById(CollectionID);
    if (!collection) {
      throw new Error("Collection not found");
    }

    collection.IsDeleted = true;
    collection.IsActivated = false;
    collection.UpdatedBy = UpdatedBy;
    collection.UpdatedDate = new Date();

    await collection.save();
    await collection.populate([
      { path: "CreatedBy" },
      { path: "UpdatedBy" }
    ]);

    return collection;
  } catch (error) {
    throw error;
  }
};

export default DeleteCollection;
