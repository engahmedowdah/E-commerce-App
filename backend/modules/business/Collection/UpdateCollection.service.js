import CollectionModel from "../../data/Collection/Collection.model.js";
import CollectionMapper from "./CollectionMapper.js";
const UpdateCollection = async ({ CollectionID, Name, Slug, Description, IsActivated }) => {
    const collection = await CollectionModel.findOne({ _id: CollectionID, IsDeleted: false });
    if (!collection) throw new Error("Collection not found");
    const existingCollection = await CollectionModel.findOne({ _id: { $ne: CollectionID }, $or: [{ Name }, { Slug }], IsDeleted: false });
    if (existingCollection) throw new Error("Collection already exists");
    const updatedCollection = await CollectionModel.findByIdAndUpdate(CollectionID, {
        Name,
        Slug,
        Description,
        IsActivated,
        UpdatedDate: Date.now(),
    }, { new: true });
    if (!updatedCollection) throw new Error("Collection not found");
    return await CollectionMapper(updatedCollection);
};
export default UpdateCollection;
