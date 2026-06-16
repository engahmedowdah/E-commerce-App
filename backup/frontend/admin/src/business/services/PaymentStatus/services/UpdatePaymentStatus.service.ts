import type { IPaymentStatus } from "../../../../shared/types/PaymentStatuses/IPaymentStatus.types";
import connect from "../../connect";
const UpdatePaymentStatus: ({ PaymentStatusID, paymentStatus }: { PaymentStatusID: string, paymentStatus: IPaymentStatus }) => Promise<IPaymentStatus> = async ({ PaymentStatusID, paymentStatus }: { PaymentStatusID: string, paymentStatus: IPaymentStatus }) => {
    const response: IPaymentStatus = await connect.put({ endpoint: `/payment-status`, body: { PaymentStatusID: PaymentStatusID, ...paymentStatus } }) as IPaymentStatus;
    return response;
};
export default UpdatePaymentStatus;
