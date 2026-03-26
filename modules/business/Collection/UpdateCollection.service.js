import CollectionModel from "../../data/Collection/Collection.model.js";
const UpdateCollection = async ({ CollectionID, Name, Slug, Description, UpdatedBy }) => {
    try {
        if (!CollectionID || !Name || !Slug || !Description || !UpdatedBy) {
            throw new Error("Missing required fields");
        }
        const collection = await CollectionModel.findById(CollectionID);
        if (!collection) {
            throw new Error("Collection not found");
        }
        if (!collection.IsActivated) {
            throw new Error("Collection is not activated");
        }

        if (Name) collection.Name = Name;
        if (Slug) collection.Slug = Slug;
        if (Description) collection.Description = Description;
        if (UpdatedBy) collection.UpdatedBy = UpdatedBy;
        collection.UpdatedDate = Date.now();

        await collection.save();

        return collection;
    } catch (error) {
        throw "Error updating collection";
    }
};
export default UpdateCollection;
