import type { IRole } from '../../../../../../shared/types/Roles/IRole.types';
import type { IPermission } from '../../../../../../shared/types/Permissions/IPermission.types';
import {
  RoleDetailsInfo,
  RoleDetailsStatus,
  RoleDetailsPermissions,
  RoleDetailsSettings,
} from "..";
interface Props {
  activeTab: string;
  role: IRole;
}
const RoleDetailsContent: React.FC<Props> = ({ activeTab, role }) => {
  return (
    <div className="relative animate-fade-in">
      {activeTab === 'Details' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8 flex flex-col">
            <RoleDetailsInfo
              name={(role as IRole).Name}
              description={(role as IRole).Description as string}
            />
          </div>
          <div className="space-y-8 flex flex-col">
            <RoleDetailsStatus role={role} />
          </div>
        </div>
      )}
      {activeTab === 'Permissions' && (
        <RoleDetailsPermissions permissions={((role.Permissions || []).filter(p => typeof p !== 'string') as IPermission[])} />
      )}
      {activeTab === 'Settings' && (
        <RoleDetailsSettings />
      )}
    </div>
  );
};
export default RoleDetailsContent;
