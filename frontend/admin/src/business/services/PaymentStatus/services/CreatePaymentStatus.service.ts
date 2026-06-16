import { validateRequired } from "../../../validators";
import type { IPaymentStatus } from "../../../../shared/types/PaymentStatuses/IPaymentStatus.types";
import connect from "../../connect";
const CreatePaymentStatus: ({ paymentStatus }: { paymentStatus: IPaymentStatus }) => Promise<IPaymentStatus | null> = async ({ paymentStatus }: { paymentStatus: IPaymentStatus }) => {
    if (!validateRequired(paymentStatus.Name)) {
        return null;
    }

    const response: IPaymentStatus = await connect.post({ endpoint: `/payment-status`, body: { ...paymentStatus } }) as IPaymentStatus;
    return response;
};
export default CreatePaymentStatus;
