import { validateRequired } from "../../../validators";
import connect from "../../connect";
import type { IPaymentStatus } from "../../../../shared/types/PaymentStatuses/IPaymentStatus.types";
const GetPaymentStatusByID: ({ PaymentStatusID }: { PaymentStatusID: string }) => Promise<IPaymentStatus | null> = async ({ PaymentStatusID }: { PaymentStatusID: string }) => {
    if (!validateRequired(PaymentStatusID)) {
        return null;
    }
    const response: IPaymentStatus = await connect.get({ endpoint: `/payment-status`, body: { PaymentStatusID: PaymentStatusID } }) as IPaymentStatus;
    return response;
};
export default GetPaymentStatusByID;
