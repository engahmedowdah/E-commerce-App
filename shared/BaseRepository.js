import IRepository from "./interfaces/IRepository.js";
export default class BaseRepository extends IRepository {
    constructor(model, primaryKey = null) {
        super();
        this.model = model;
        this.primaryKey = primaryKey;
    }
    async activate(id) {
        if (!this.model.schema.paths.IsActivated) return null;
        return this.model.findByIdAndUpdate(
            id,
            { IsActivated: true, UpdatedDate: new Date() },
            { new: true }
        );
    }
    async findById(id) {
        return this.model.findOne({ _id: id, IsDeleted: { $ne: true } });
    }
    async findAll() {
        return this.model.find({ IsDeleted: { $ne: true } });
    }
    async create(data) {
        return this.model.create(data);
    }
    async update(id, data) {
        return this.model.findByIdAndUpdate(
            id,
            { ...data, UpdatedDate: new Date() },
            { new: true }
        );
    }
    async softDelete(id, updatedBy) {
        return this.model.findByIdAndUpdate(
            id,
            { IsDeleted: true, updatedBy, UpdatedDate: new Date() },
            { new: true }
        );
    }
    async deleteMany(filter) {
        return this.model.deleteMany(filter);
    }
}
