import OrderModel from "../../data/Order/Order.model.js";
const GetAllOrders = async () => {
    try {
        const orders = await OrderModel.find();
        await Promise.all([
            orders.populate("UserID"),
            orders.populate("AddressID"),
            orders.populate("PaymentID"),
            orders.populate("OrderStatusID")
        ]);
        if (!orders) throw new Error("Orders not found");
        return orders;
    } catch (error) {
        console.error("GetAllOrders Error:", error.message);
        throw error;
    }
};
export default GetAllOrders;