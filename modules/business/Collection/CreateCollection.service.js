import CollectionModel from "../../data/Collection/Collection.model.js";
const CreateCollection = async ({ Name, Slug, Description, IsActivated, CreatedBy }) => {
  try {
    if (!Name || !Slug || !Description || !CreatedBy) {
      throw new Error("Missing required fields");
    }
    const collection = await CollectionModel.create({
      Name,
      Slug,
      Description,
      IsActivated: IsActivated || false,
      CreatedBy,
      CreatedDate: new Date(),
    });

    return collection;
  } catch (error) {
    throw "Error creating collection";
  }
};
export default CreateCollection;
