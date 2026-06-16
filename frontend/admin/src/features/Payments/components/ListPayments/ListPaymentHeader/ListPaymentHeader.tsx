import "./ListPaymentHeader.css";
import { useTranslation } from "../../../../../shared/i18n/useTranslation";
const ListPaymentHeader = () => {
  const t = useTranslation();
  return (
    <div className="flex items-end justify-between">
      <div>
        <h2 className="text-4xl font-extrabold tracking-tight text-primary leading-none">{t.pages.payments.title}</h2>
        <p className="mt-2 text-on-surface-variant font-medium">{t.pages.payments.subtitle}</p>
      </div>
    </div>
  );
};
export default ListPaymentHeader;
