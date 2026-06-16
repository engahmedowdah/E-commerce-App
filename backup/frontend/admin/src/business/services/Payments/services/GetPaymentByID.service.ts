import type { IPayment } from "../../../../shared/types/Payments/IPayment.types";
import connect from "../../connect";
const GetPaymentByID: ({ PaymentID }: { PaymentID: string }) => Promise<IPayment> = async ({ PaymentID }: { PaymentID: string }) => {
    const response: IPayment = await connect.get({ endpoint: `/payment`, body: { PaymentID: PaymentID } }) as IPayment;
    return response;
};
export default GetPaymentByID;
