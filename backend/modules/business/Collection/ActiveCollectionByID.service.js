import CollectionModel from "../../data/Collection/Collection.model.js";
import CollectionMapper from "./CollectionMapper.js";
const ActiveCollectionByID = async ({ CollectionID }) => {
    const updatedDoc = await CollectionModel.findOneAndUpdate(
        { _id: CollectionID, IsDeleted: false },
        [{ $set: { IsActivated: { $not: "$IsActivated" } } }],
        { new: true, updatePipeline: true }
    );
    if (!updatedDoc) throw new Error("Collection not found");
    return await CollectionMapper(updatedDoc);
};
export default ActiveCollectionByID;
