import { validateRequired } from "../../../validators";
import type { IOrder } from "../../../../shared/types/Orders/IOrder.types";
import connect from "../../connect";
const UpdateOrder: ({ OrderID, Order }: { OrderID: string, Order: IOrder }) => Promise<IOrder | null> = async ({ OrderID, Order }: { OrderID: string, Order: IOrder }) => {
    if (!validateRequired(OrderID)) {
        return null;
    }
    const response: IOrder = await connect.put({ endpoint: `/order`, body: { OrderID: OrderID, OrderStatusID: Order.OrderStatusID } }) as IOrder;
    return response;
};
export default UpdateOrder;
