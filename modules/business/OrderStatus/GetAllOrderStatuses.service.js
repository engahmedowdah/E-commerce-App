import OrderStatusModel from "../../data/OrderStatus/OrderStatus.model.js";
const GetAllOrderStatuses = async () => {
    try {
        const orderStatuses = await OrderStatusModel.find({ IsDeleted: false });
        if (!orderStatuses) throw new Error("Order statuses not found");
        return orderStatuses;
    } catch (error) {
        throw "Error getting order statuses";
    }
};
export default GetAllOrderStatuses;
