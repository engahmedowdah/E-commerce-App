import type { IPaymentMethod } from "../../../../shared/types/PaymentMethods/IPaymentMethod.types";
import connect from "../../connect";
const DeletePaymentMethod: ({ PaymentMethodID }: { PaymentMethodID: string }) => Promise<IPaymentMethod> = async ({ PaymentMethodID }: { PaymentMethodID: string }) => {
    const response: IPaymentMethod = await connect.del({ endpoint: `/payment-method`, body: { PaymentMethodID: PaymentMethodID } }) as IPaymentMethod;
    return response;
};
export default DeletePaymentMethod;
