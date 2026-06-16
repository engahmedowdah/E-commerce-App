import "./ListRoleCards.css";
import type { IRole } from "../../../../../shared/types/Roles/IRole.types";
import { RoleCard } from "../..";
import LoadingRoles from "../LoadingRoles/LoadingRoles";
import { useNavigate } from "react-router-dom";
interface Props {
  roles: IRole[];
  Loading: boolean;
  onRefresh?: () => void;
}
const ListRoleCards = ({ roles, Loading, onRefresh }: Props) => {
  const navigate = useNavigate();
  if (Loading) {
    return (
      <div className="py-12 flex justify-center">
        <LoadingRoles />
      </div>
    );
  }
  return (
    <div className="row g-3">
      {roles.map((role, index) => (
        <div key={role._id || index} className="col-12 col-md-6 col-lg-4">
          <RoleCard
            role={role}
            onRefresh={onRefresh}
          />
        </div>
      ))}
      {!Loading && roles.length === 0 && (
        <div className="col-12 py-16 flex flex-col items-center justify-center bg-surface-container-lowest rounded-2xl shadow-sm border border-dashed border-surface-container-high mt-4">
          <div className="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-4xl text-on-surface-variant">
              inventory_2
            </span>
          </div>
          <h4 className="text-xl font-black text-primary mb-2">No Roles Found</h4>
          <p className="text-sm font-medium text-on-surface-variant text-center max-w-sm mb-6">
            You don't have any roles yet. Curate and manage your storefront product groupings to get started!
          </p>
          <button className="bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-sm" onClick={() => navigate('/roles/create')}>
            <span className="material-symbols-outlined text-sm">add</span>
            Create Role
          </button>
        </div>
      )}
    </div>
  );
};
export default ListRoleCards;
