import OrderStatusModel from "../../data/OrderStatus/OrderStatus.model.js";
const GetOrderStatusByID = async ({ OrderStatusID }) => {
    try {
        if (!OrderStatusID) throw new Error("Missing required fields");
        const orderStatus = await OrderStatusModel.findOne({ _id: OrderStatusID, IsDeleted: false });
        if (!orderStatus) throw new Error("Order status not found");
        return orderStatus;
    } catch (error) {
        throw "Error getting order status";
    }
};
export default GetOrderStatusByID;
