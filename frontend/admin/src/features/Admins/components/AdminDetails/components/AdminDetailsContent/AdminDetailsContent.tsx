import type { IAdmin } from '../../../../../../shared/types/Admins/IAdmin.types';
import {
  AdminDetailsInfo,
  AdminDetailsMedia,
  AdminDetailsStatus,
  AdminDetailsSettings,
} from "..";
interface Props {
  activeTab: string;
  admin: IAdmin;
}
const AdminDetailsContent: React.FC<Props> = ({ activeTab, admin }) => {
  return (
    <div className="relative animate-fade-in">
      {activeTab === 'Details' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8 flex flex-col">
            <AdminDetailsInfo
              name={(admin as IAdmin).FirstName + " " + (admin as IAdmin).LastName}
              email={(admin as IAdmin).Email}
              role={(admin as IAdmin).Role?.Name || 'No Role'}
              phone={(admin as IAdmin).Phone || 'No Phone'}
              username={(admin as IAdmin).UserName || 'No UserName'}
            />
            <AdminDetailsMedia />
          </div>
          <div className="space-y-8 flex flex-col">
            <AdminDetailsStatus admin={admin} />
          </div>
        </div>
      )}
      {activeTab === 'Settings' && (
        <AdminDetailsSettings />
      )}
    </div>
  );
};
export default AdminDetailsContent;
