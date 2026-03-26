import CollectionModel from "../../data/Collection/Collection.model.js";
const ActiveCollectionByID = async ({ CollectionID, UpdatedBy }) => {
    try {
        if (!CollectionID || !UpdatedBy) {
            throw new Error("Missing required fields");
        }
        const collection = await CollectionModel.findById(CollectionID);
        if (!collection) {
            throw new Error("Collection not found");
        }

        collection.IsActivated = !collection.IsActivated;
        collection.UpdatedBy = UpdatedBy;
        collection.UpdatedDate = new Date();

        await collection.save();
        return collection;
    } catch (error) {
        throw "Error activating collection";
    }
};
export default ActiveCollectionByID;
