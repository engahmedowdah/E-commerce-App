import type { IOrder } from "../../../../shared/types/Orders/IOrder.types";
import connect from "../../connect";
const UpdateOrder: ({ OrderID, Order }: { OrderID: string, Order: IOrder }) => Promise<IOrder> = async ({ OrderID, Order }: { OrderID: string, Order: IOrder }) => {
    const response: IOrder = await connect.put({ endpoint: `/order`, body: { OrderID: OrderID, OrderStatusID: Order.OrderStatusID } }) as IOrder;
    return response;
};
export default UpdateOrder;
