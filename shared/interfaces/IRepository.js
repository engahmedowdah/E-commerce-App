export default class IRepository {
    async findById(id) {
        throw new Error("IRepository.findById() must be implemented");
    }
    async findAll() {
        throw new Error("IRepository.findAll() must be implemented");
    }
    async create(data) {
        throw new Error("IRepository.create() must be implemented");
    }
    async update(id, data) {
        throw new Error("IRepository.update() must be implemented");
    }
    async softDelete(id) {
        throw new Error("IRepository.softDelete() must be implemented");
    }
    async deleteMany(filter) {
        throw new Error("IRepository.deleteMany() must be implemented");
    }
}
