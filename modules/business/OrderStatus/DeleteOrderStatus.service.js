import OrderStatusModel from "../../data/OrderStatus/OrderStatus.model.js";
const DeleteOrderStatus = async ({ OrderStatusID, UpdatedBy }) => {
    try {
        if (!OrderStatusID || !UpdatedBy) throw new Error("Missing required fields");
        const orderStatus = await OrderStatusModel.findByIdAndUpdate(OrderStatusID, {
            IsDeleted: true,
            UpdatedBy,
            UpdatedDate: Date.now()
        }, { new: true });
        if (!orderStatus) throw new Error("Order status not found");
        return orderStatus;
    } catch (error) {
        throw "Error deleting order status";
    }
};
export default DeleteOrderStatus;
