import type { IOrderStatus } from '../../../../../../shared/types/OrderStatuses/IOrderStatus.types';
import {
  OrderStatusDetailsInfo,
  OrderStatusDetailsStatus,
  OrderStatusDetailsSettings,
} from "..";
interface Props {
  activeTab: string;
  orderstatus: IOrderStatus;
}
const OrderStatusDetailsContent: React.FC<Props> = ({ activeTab, orderstatus }) => {
  return (
    <div className="relative animate-fade-in">
      {activeTab === 'Details' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8 flex flex-col">
            <OrderStatusDetailsInfo
              name={orderstatus.Name}
            />
          </div>
          <div className="space-y-8 flex flex-col">
            <OrderStatusDetailsStatus orderstatus={orderstatus} />
          </div>
        </div>
      )}
      {activeTab === 'Settings' && (
        <OrderStatusDetailsSettings />
      )}
    </div>
  );
};
export default OrderStatusDetailsContent;
