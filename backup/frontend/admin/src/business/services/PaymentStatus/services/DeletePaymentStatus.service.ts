import type { IPaymentStatus } from "../../../../shared/types/PaymentStatuses/IPaymentStatus.types";
import connect from "../../connect";
const DeletePaymentStatus: ({ PaymentStatusID }: { PaymentStatusID: string }) => Promise<IPaymentStatus> = async ({ PaymentStatusID }: { PaymentStatusID: string }) => {
    const response: IPaymentStatus = await connect.del({ endpoint: `/payment-status`, body: { PaymentStatusID: PaymentStatusID } }) as IPaymentStatus;
    return response;
};
export default DeletePaymentStatus;
