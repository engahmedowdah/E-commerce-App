import OrderStatusModel from "../../data/OrderStatus/OrderStatus.model.js";
import OrderStatusMapper from "./OrderStatusMapper.js";
const UpdateOrderStatus = async ({ OrderStatusID, Name, IsActivated }) => {
    const orderStatus = await OrderStatusModel.findOne({ _id: OrderStatusID, IsDeleted: false });
    if (!orderStatus) throw new Error("Order status not found");
    if (Name) {
        const existingOrderStatus = await OrderStatusModel.findOne({ Name, _id: { $ne: OrderStatusID }, IsDeleted: false });
        if (existingOrderStatus) throw new Error("Order status already exists");
    }
    const updateFields = {};
    if (Name !== undefined) updateFields.Name = Name;
    if (IsActivated !== undefined) updateFields.IsActivated = IsActivated;
    const updatedOrderStatus = await OrderStatusModel.findByIdAndUpdate(OrderStatusID, updateFields, { new: true });
    if (!updatedOrderStatus) throw new Error("Order status not updated");
    return await OrderStatusMapper(updatedOrderStatus);
};
export default UpdateOrderStatus;
