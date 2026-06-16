import type { IOrder } from "../../../../shared/types/Orders/IOrder.types";
import connect from "../../connect";
const GetOrderByID: ({ OrderID }: { OrderID: string }) => Promise<IOrder> = async ({ OrderID }: { OrderID: string }) => {
    const response: IOrder = await connect.get({ endpoint: `/order`, body: { OrderID: OrderID } }) as IOrder;
    return response;
};
export default GetOrderByID;
