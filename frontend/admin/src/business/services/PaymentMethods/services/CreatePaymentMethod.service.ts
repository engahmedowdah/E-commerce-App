import { validateRequired } from "../../../validators";
import connect from "../../connect";
import type { IPaymentMethod } from "../../../../shared/types/PaymentMethods/IPaymentMethod.types";
const CreatePaymentMethod: ({ paymentMethod }: { paymentMethod: IPaymentMethod }) => Promise<IPaymentMethod | null> = async ({ paymentMethod }: { paymentMethod: IPaymentMethod }) => {
    if (!validateRequired(paymentMethod.Name)) {
        return null;
    }

    const response: IPaymentMethod = await connect.post({ endpoint: `/payment-method`, body: { ...paymentMethod } }) as IPaymentMethod;
    return response;
};
export default CreatePaymentMethod;
