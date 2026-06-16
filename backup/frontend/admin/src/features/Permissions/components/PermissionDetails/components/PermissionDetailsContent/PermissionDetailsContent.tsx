import type { IPermission } from '../../../../../../shared/types/Permissions/IPermission.types';
import {
  PermissionDetailsInfo,
  PermissionDetailsStatus,
  PermissionDetailsSettings,
} from "..";
interface Props {
  activeTab: string;
  permission: IPermission;
}
const PermissionDetailsContent: React.FC<Props> = ({ activeTab, permission }) => {
  return (
    <div className="relative animate-fade-in">
      {activeTab === 'Details' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8 flex flex-col">
            <PermissionDetailsInfo
              name={(permission as IPermission).Name}
              description={(permission as IPermission).Description as string}
            />
          </div>
          <div className="space-y-8 flex flex-col">
            <PermissionDetailsStatus permission={permission} />
          </div>
        </div>
      )}
      {activeTab === 'Settings' && (
        <PermissionDetailsSettings />
      )}
    </div>
  );
};
export default PermissionDetailsContent;
