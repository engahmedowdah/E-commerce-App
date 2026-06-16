import type { IPaymentStatus } from '../../../../../../shared/types/PaymentStatuses/IPaymentStatus.types';
import {
  PaymentStatusDetailsInfo,
  PaymentStatusDetailsStatus,
  PaymentStatusDetailsSettings,
} from "..";
interface Props {
  activeTab: string;
  paymentstatus: IPaymentStatus;
}
const PaymentStatusDetailsContent: React.FC<Props> = ({ activeTab, paymentstatus }) => {
  return (
    <div className="relative animate-fade-in">
      {activeTab === 'Details' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8 flex flex-col">
            <PaymentStatusDetailsInfo
              name={(paymentstatus as IPaymentStatus).Name}
            />
          </div>
          <div className="space-y-8 flex flex-col">
            <PaymentStatusDetailsStatus paymentstatus={paymentstatus} />
          </div>
        </div>
      )}
      {activeTab === 'Settings' && (
        <PaymentStatusDetailsSettings />
      )}
    </div>
  );
};
export default PaymentStatusDetailsContent;
