import type { IPaymentStatus } from "../../../../shared/types/PaymentStatuses/IPaymentStatus.types";
import connect from "../../connect";
const ActivePaymentStatusByID: ({ PaymentStatusID }: { PaymentStatusID: string }) => Promise<IPaymentStatus> = async ({ PaymentStatusID }: { PaymentStatusID: string }) => {
    const response: IPaymentStatus  = await connect.patch({ endpoint: `/payment-status/active`, body: { PaymentStatusID: PaymentStatusID } }) as IPaymentStatus;
    return response;
};
export default ActivePaymentStatusByID;
