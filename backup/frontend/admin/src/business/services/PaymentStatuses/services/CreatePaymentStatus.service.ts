import connect from "../../connect";
import type { IPaymentStatus } from "../../../../shared/types/PaymentStatuses/IPaymentStatus.types";
const CreatePaymentStatus: ({ paymentStatus }: { paymentStatus: IPaymentStatus }) => Promise<IPaymentStatus> = async ({ paymentStatus }: { paymentStatus: IPaymentStatus }) => {
    const response: IPaymentStatus = await connect.post({ endpoint: `/payment-status`, body: { ...paymentStatus } }) as IPaymentStatus;
    return response;
};
export default CreatePaymentStatus;
