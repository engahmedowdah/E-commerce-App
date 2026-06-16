import "./ListAdminCards.css";
import type { IAdmin } from "../../../../../shared/types/Admins/IAdmin.types";
import { AdminCard } from "../..";
import LoadingAdmins from "../LoadingAdmins/LoadingAdmins";
import { useNavigate } from "react-router-dom";
import useTranslation from "../../../../../shared/i18n/useTranslation";
interface Props {
  admins: IAdmin[];
  Loading: boolean;
  onRefresh?: () => void;
}
const ListAdminCards = ({ admins, Loading, onRefresh }: Props) => {
  const navigate = useNavigate();
  const t = useTranslation();
  const p = t.pages.admins as Record<string, string>;
  if (Loading) {
    return (
      <div className="py-12 flex justify-center">
        <LoadingAdmins />
      </div>
    );
  }
  return (
    <div className="row g-3">
      {admins.map((admin, index) => (
        <div key={admin._id || index} className="col-12 col-md-6 col-lg-4">
          <AdminCard admin={admin} onRefresh={onRefresh} />
        </div>
      ))}
      {!Loading && admins.length === 0 && (
        <div className="col-12 py-16 flex flex-col items-center justify-center bg-surface-container-lowest rounded-2xl shadow-sm border border-dashed border-surface-container-high mt-4">
          <div className="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-4xl text-on-surface-variant">inventory_2</span>
          </div>
          <h4 className="text-xl font-black text-primary mb-2">{p.empty}</h4>
          <p className="text-sm font-medium text-on-surface-variant text-center max-w-sm mb-6">{p.emptyHint}</p>
          <button className="bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-sm" onClick={() => navigate('/admins/create')}>
            <span className="material-symbols-outlined text-sm">add</span>
            {p.create}
          </button>
        </div>
      )}
    </div>
  );
};
export default ListAdminCards;
