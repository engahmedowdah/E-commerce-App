import CollectionModel from "../../data/Collection/Collection.model.js";
import CollectionMapper from "./CollectionMapper.js";
const GetCollectionBySlug = async ({ Slug }) => {
    if (!Slug) {
        return null;
    }
    const collection = await CollectionModel.findOne({ Slug: Slug.trim(), IsDeleted: false }).lean();
    if (!collection) return null;
    return await CollectionMapper(collection);
};
export default GetCollectionBySlug;
