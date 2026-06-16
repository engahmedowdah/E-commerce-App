import type { IOrderStatus } from "../../../../shared/types/OrderStatuses/IOrderStatus.types";
import connect from "../../connect";
const ActiveOrderStatusByID: ({ OrderStatusID }: { OrderStatusID: string }) => Promise<IOrderStatus> = async ({ OrderStatusID }: { OrderStatusID: string }) => {
    const response: IOrderStatus = await connect.patch({ endpoint: `/order-status/active`, body: { OrderStatusID: OrderStatusID } }) as IOrderStatus;
    return response;
};
export default ActiveOrderStatusByID;
