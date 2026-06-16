import type { IPaymentMethod } from "../../../../shared/types/PaymentMethods/IPaymentMethod.types";
import connect from "../../connect";
const GetPaymentMethodByID: ({ PaymentMethodID }: { PaymentMethodID: string }) => Promise<IPaymentMethod> = async ({ PaymentMethodID }: { PaymentMethodID: string }) => {
    const response: IPaymentMethod  = await connect.get({ endpoint: `/payment-method`, body: { PaymentMethodID: PaymentMethodID } }) as IPaymentMethod;
    return response;
};
export default GetPaymentMethodByID;
