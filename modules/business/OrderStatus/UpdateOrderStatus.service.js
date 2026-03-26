import OrderStatusModel from "../../data/OrderStatus/OrderStatus.model.js";
const UpdateOrderStatus = async ({ OrderStatusID, Name, UpdatedBy }) => {
    try {
        if (!OrderStatusID || !UpdatedBy) throw new Error("Missing required fields");
        const orderStatus = await OrderStatusModel.findOne({ _id: OrderStatusID, IsDeleted: false });
        if (!orderStatus) throw new Error("Order status not found");

        if (Name) {
            orderStatus.Name = Name;
        }

        orderStatus.UpdatedBy = UpdatedBy;
        orderStatus.UpdatedDate = Date.now();
        await orderStatus.save();

        return orderStatus;
    } catch (error) {
        throw "Error updating order status";
    }
};
export default UpdateOrderStatus;
