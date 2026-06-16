import { validateRequired } from "../../../validators";
import type { IOrderStatus } from "../../../../shared/types/OrderStatuses/IOrderStatus.types";
import connect from "../../connect";
const UpdateOrderStatus: ({ OrderStatusID, OrderStatus }: { OrderStatusID: string, OrderStatus: IOrderStatus }) => Promise<IOrderStatus | null> = async ({ OrderStatusID, OrderStatus }: { OrderStatusID: string, OrderStatus: IOrderStatus }) => {
    if (!validateRequired(OrderStatusID)) {
        return null;
    }
    const response: IOrderStatus = await connect.put({ endpoint: `/order-status`, body: { OrderStatusID: OrderStatusID, ...OrderStatus } }) as IOrderStatus;
    return response;
};
export default UpdateOrderStatus;
