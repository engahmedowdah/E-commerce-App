import type { IPayment } from '../../../../../../shared/types/Payments/IPayment.types';
import {
  PaymentDetailsStatus,
  PaymentDetailsSettings,
  PaymentDetailsInfo,
} from "..";
interface Props {
  activeTab: string;
  payment: IPayment;
}
const PaymentDetailsContent: React.FC<Props> = ({ activeTab, payment }) => {
  return (
    <div className="relative animate-fade-in">
      {activeTab === 'Details' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="space-y-8 flex flex-col lg:col-span-2">
            <PaymentDetailsInfo payment={payment} />
          </div>
          <div className="space-y-8 flex flex-col lg:col-span-1">
            <PaymentDetailsStatus payment={payment} />
          </div>
        </div>
      )}
      {activeTab === 'Settings' && (
        <PaymentDetailsSettings />
      )}
    </div>
  );
};
export default PaymentDetailsContent;
