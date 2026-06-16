import type { IOrder } from '../../../../../../shared/types/Orders/IOrder.types';
import {
  OrderDetailsStatus,
  OrderDetailsProducts,
  OrderDetailsSettings,
  OrderDetailsInfo,
} from "..";
import { IOrderProduct } from '../../../../../../shared/types/OrderProducts/IOrderProduct.types';
interface Props {
  activeTab: string;
  order: IOrder;
}
const OrderDetailsContent: React.FC<Props> = ({ activeTab, order }) => {
  return (
    <div className="relative animate-fade-in">
      {activeTab === 'Details' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8 flex flex-col">
            <OrderDetailsInfo order={order} />
          </div>
          <div className="lg:col-span-1 space-y-8 flex flex-col">
            <OrderDetailsStatus order={order} />
          </div>
        </div>
      )}
      {activeTab === 'Products' && (
        <OrderDetailsProducts
          products={(order as IOrder).Items as IOrderProduct[] || []}
          currencySymbol={order.Payment?.CurrencySymbol || '$'}
        />
      )}
      {activeTab === 'Settings' && (
        <OrderDetailsSettings />
      )}
    </div>
  );
};
export default OrderDetailsContent;
