export const SoftDeleteById = async (Model, id) => {
    const doc = await Model.findOneAndUpdate(
        { _id: id, IsDeleted: false },
        {
            IsDeleted: true,
            IsActivated: false,
            UpdatedDate: new Date(),
        },
        { new: true }
    );
    if (!doc) throw new Error("Document not found or already deleted");
    return doc;
};
