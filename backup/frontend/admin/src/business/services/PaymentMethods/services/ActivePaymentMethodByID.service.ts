import type { IPaymentMethod } from "../../../../shared/types/PaymentMethods/IPaymentMethod.types";
import connect from "../../connect";
const ActivePaymentMethodByID: ({ PaymentMethodID }: { PaymentMethodID: string }) => Promise<IPaymentMethod> = async ({ PaymentMethodID }: { PaymentMethodID: string }) => {
    const response: IPaymentMethod  = await connect.patch({ endpoint: `/payment-method/active`, body: { PaymentMethodID: PaymentMethodID } }) as IPaymentMethod;
    return response;
};
export default ActivePaymentMethodByID;
