import connect from "../../connect";
import type { IPayment } from "../../../../shared/types/Payments/IPayment.types";
const UpdatePayment: ({ PaymentID, payment }: { PaymentID: string, payment: Partial<IPayment> }) => Promise<IPayment> = async ({ PaymentID, payment }: { PaymentID: string, payment: Partial<IPayment> }) => {
    const response: IPayment = await connect.put({ endpoint: `/payment`, body: { PaymentID: PaymentID, ...payment } }) as IPayment;
    return response;
};
export default UpdatePayment;
