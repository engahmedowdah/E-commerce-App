import { validateRequired } from "../../../validators";
import type { IPaymentStatus } from "../../../../shared/types/PaymentStatuses/IPaymentStatus.types";
import connect from "../../connect";
const UpdatePaymentStatus: ({ PaymentStatusID, paymentStatus }: { PaymentStatusID: string, paymentStatus: IPaymentStatus }) => Promise<IPaymentStatus | null> = async ({ PaymentStatusID, paymentStatus }: { PaymentStatusID: string, paymentStatus: IPaymentStatus }) => {
    if (!validateRequired(PaymentStatusID)) {
        return null;
    }
    const response: IPaymentStatus = await connect.put({ endpoint: `/payment-status`, body: { PaymentStatusID: PaymentStatusID, ...paymentStatus } }) as IPaymentStatus;
    return response;
};
export default UpdatePaymentStatus;
