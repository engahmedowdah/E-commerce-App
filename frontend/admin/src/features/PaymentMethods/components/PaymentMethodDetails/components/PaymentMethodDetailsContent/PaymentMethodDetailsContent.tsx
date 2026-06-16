import type { IPaymentMethod } from '../../../../../../shared/types/PaymentMethods/IPaymentMethod.types';
import {
  PaymentMethodDetailsInfo,
  PaymentMethodDetailsStatus,
  PaymentMethodDetailsSettings,
} from "..";
interface Props {
  activeTab: string;
  paymentmethod: IPaymentMethod;
}
const PaymentMethodDetailsContent: React.FC<Props> = ({ activeTab, paymentmethod }) => {
  return (
    <div className="relative animate-fade-in">
      {activeTab === 'Details' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8 flex flex-col">
            <PaymentMethodDetailsInfo
              name={(paymentmethod as IPaymentMethod).Name}
            />
          </div>
          <div className="space-y-8 flex flex-col">
            <PaymentMethodDetailsStatus paymentmethod={paymentmethod} />
          </div>
        </div>
      )}
      {activeTab === 'Settings' && (
        <PaymentMethodDetailsSettings />
      )}
    </div>
  );
};
export default PaymentMethodDetailsContent;
