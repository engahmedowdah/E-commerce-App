import { validateRequired } from "../../../validators";
import type { IPaymentMethod } from "../../../../shared/types/PaymentMethods/IPaymentMethod.types";
import connect from "../../connect";
const GetPaymentMethodByID: ({ PaymentMethodID }: { PaymentMethodID: string }) => Promise<IPaymentMethod | null> = async ({ PaymentMethodID }: { PaymentMethodID: string }) => {
    if (!validateRequired(PaymentMethodID)) {
        return null;
    }
    const response: IPaymentMethod = await connect.get({ endpoint: `/payment-method`, body: { PaymentMethodID: PaymentMethodID } }) as IPaymentMethod;
    return response;
};
export default GetPaymentMethodByID;
