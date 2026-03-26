import { NotDeletedFilter } from "../../../shared/utils.js";
import CollectionModel from "../../data/Collection/Collection.model.js";

const GetAllCollections = async ({ includeDeleted = false }) => {
    try {
        const collections = await CollectionModel.find({ ...NotDeletedFilter(includeDeleted) });
        if (!collections) {
            throw new Error("Collections not found");
        }
        await Promise.all([
            collections.populate("CreatedBy"),
            collections.populate("UpdatedBy")
        ]);
        return collections;
    } catch (error) {
        throw error;
    }
};

export default GetAllCollections;
