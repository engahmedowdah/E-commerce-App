import type { IOrderStatus } from "../../../../shared/types/OrderStatuses/IOrderStatus.types";
import connect from "../../connect";
const DeleteOrderStatus: ({ OrderStatusID }: { OrderStatusID: string }) => Promise<IOrderStatus> = async ({ OrderStatusID }: { OrderStatusID: string }) => {
    const response: IOrderStatus = await connect.del({ endpoint: `/order-status`, body: { OrderStatusID: OrderStatusID } }) as IOrderStatus;
    return response;
};
export default DeleteOrderStatus;
