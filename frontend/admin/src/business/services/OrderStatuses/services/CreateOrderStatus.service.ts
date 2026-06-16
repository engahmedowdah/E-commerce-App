import { validateRequired } from "../../../validators";
import connect from "../../connect";
import type { IOrderStatus } from "../../../../shared/types/OrderStatuses/IOrderStatus.types";
const CreateOrderStatus: ({ orderStatus }: { orderStatus: IOrderStatus }) => Promise<IOrderStatus | null> = async ({ orderStatus }: { orderStatus: IOrderStatus }) => {
    if (!validateRequired(orderStatus.Name)) {
        return null;
    }

    const response: IOrderStatus = await connect.post({ endpoint: `/order-status`, body: { ...orderStatus } }) as IOrderStatus;
    return response;
};
export default CreateOrderStatus;
