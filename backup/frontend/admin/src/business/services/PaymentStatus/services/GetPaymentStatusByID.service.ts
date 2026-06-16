import type { IPaymentStatus } from "../../../../shared/types/PaymentStatuses/IPaymentStatus.types";
import connect from "../../connect";
const GetPaymentStatusByID: ({ PaymentStatusID }: { PaymentStatusID: string }) => Promise<IPaymentStatus> = async ({ PaymentStatusID }: { PaymentStatusID: string }) => {
    const response: IPaymentStatus = await connect.get({ endpoint: `/payment-status`, body: { PaymentStatusID: PaymentStatusID } }) as IPaymentStatus;
    return response;
};
export default GetPaymentStatusByID;
