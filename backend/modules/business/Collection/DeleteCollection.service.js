import CollectionModel from "../../data/Collection/Collection.model.js";
import { SoftDeleteById } from "../../../shared/dbUtils.js";
import CollectionMapper from "./CollectionMapper.js";
const DeleteCollection = async ({ CollectionID }) => {
    const deleted = await SoftDeleteById(CollectionModel, CollectionID);
    if (!deleted) throw new Error("Collection not found");
    return await CollectionMapper(deleted);
};
export default DeleteCollection;
