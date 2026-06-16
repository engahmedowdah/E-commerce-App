import CollectionModel from "../../data/Collection/Collection.model.js";
import CollectionMapper from "./CollectionMapper.js";
const CreateCollection = async ({ Name, Slug, Description, IsActivated }) => {
  const existingCollection = await CollectionModel.findOne({ Name, Slug, IsDeleted: false });
  if (existingCollection) throw new Error("Collection already exists");
  const collection = await CollectionModel.create({
    Name: Name,
    Slug: Slug,
    Description: Description,
    IsActivated: IsActivated || false,
    CreatedDate: new Date(),
  });
  return await CollectionMapper(collection);
};
export default CreateCollection;
