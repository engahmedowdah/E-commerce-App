import CollectionModel from "../../data/Collection/Collection.model.js";

const GetCollectionBySlug = async (Slug) => {
    try {
        if (!Slug) throw new Error("Slug is required");
        const collection = await CollectionModel.findOne({ Slug, IsDeleted: false });
        if (!collection) {
            throw new Error("Collection not found");
        }
        await collection.populate([
            { path: "CreatedBy" },
            { path: "UpdatedBy" }
        ]);
        return collection;
    } catch (error) {
        throw error;
    }
};

export default GetCollectionBySlug;
