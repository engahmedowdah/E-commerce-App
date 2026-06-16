import connect from "../../connect";
import type { IPaymentMethod } from "../../../../shared/types/PaymentMethods/IPaymentMethod.types";
const CreatePaymentMethod: ({ paymentMethod }: { paymentMethod: IPaymentMethod }) => Promise<IPaymentMethod> = async ({ paymentMethod }: { paymentMethod: IPaymentMethod }) => {
    const response: IPaymentMethod  = await connect.post({ endpoint: `/payment-method`, body: { ...paymentMethod } }) as IPaymentMethod;
    return response;
};
export default CreatePaymentMethod;
