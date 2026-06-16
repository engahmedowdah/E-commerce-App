import OrderStatusModel from "../../data/OrderStatus/OrderStatus.model.js";
import OrderStatusMapper from "./OrderStatusMapper.js";
const ActiveOrderStatusByID = async ({ OrderStatusID }) => {
    const orderStatus = await OrderStatusModel.findOne({ _id: OrderStatusID, IsDeleted: false });
    if (!orderStatus) throw new Error("Order status not found");
    const updatedDoc = await OrderStatusModel.findOneAndUpdate(
        { _id: OrderStatusID, IsDeleted: false },
        [{ $set: { IsActivated: { $not: "$IsActivated" } } }],
        { new: true, updatePipeline: true }
    ).lean();
    if (!updatedDoc) throw new Error("Order status not found");
    return await OrderStatusMapper(updatedDoc);
};
export default ActiveOrderStatusByID;
