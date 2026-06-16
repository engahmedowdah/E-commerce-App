import type { IPaymentMethod } from "../../../../shared/types/PaymentMethods/IPaymentMethod.types";
import connect from "../../connect";
const UpdatePaymentMethod: ({ PaymentMethodID, paymentMethod }: { PaymentMethodID: string, paymentMethod: IPaymentMethod }) => Promise<IPaymentMethod> = async ({ PaymentMethodID, paymentMethod }: { PaymentMethodID: string, paymentMethod: IPaymentMethod }) => {
    const response: IPaymentMethod = await connect.put({ endpoint: `/payment-method`, body: { PaymentMethodID: PaymentMethodID, ...paymentMethod } }) as IPaymentMethod;
    return response;
};
export default UpdatePaymentMethod;
