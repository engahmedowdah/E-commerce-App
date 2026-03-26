import OrderStatusModel from "../../data/OrderStatus/OrderStatus.model.js";
const ActiveOrderStatusByID = async ({ OrderStatusID, UpdatedBy }) => {
    try {
        if (!OrderStatusID || !UpdatedBy) throw new Error("Missing required fields");
        const orderStatus = await OrderStatusModel.findOne({ _id: OrderStatusID, IsDeleted: false });
        if (!orderStatus) throw new Error("Order status not found");

        orderStatus.IsActivated = !orderStatus.IsActivated;
        orderStatus.UpdatedBy = UpdatedBy;
        orderStatus.UpdatedDate = Date.now();

        await orderStatus.save();

        return orderStatus;
    } catch (error) {
        throw "Error activating order status";
    }
};
export default ActiveOrderStatusByID;
