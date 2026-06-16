import { validateRequired } from "../../../validators";
import type { IOrder } from "../../../../shared/types/Orders/IOrder.types";
import connect from "../../connect";
const GetOrderByID: ({ OrderID }: { OrderID: string }) => Promise<IOrder | null> = async ({ OrderID }: { OrderID: string }) => {
    if (!validateRequired(OrderID)) {
        return null;
    }
    const response: IOrder = await connect.get({ endpoint: `/order`, body: { OrderID: OrderID } }) as IOrder;
    return response;
};
export default GetOrderByID;
