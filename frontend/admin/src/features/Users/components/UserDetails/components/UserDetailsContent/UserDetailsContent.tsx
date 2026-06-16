import type { IUser } from '../../../../../../shared/types/Users/IUser.types';
import {
  UserDetailsInfo,
  UserDetailsMedia,
  UserDetailsStatus,
  UserDetailsSettings,
} from "..";
interface Props {
  activeTab: string;
  user: IUser;
}
const UserDetailsContent: React.FC<Props> = ({ activeTab, user }) => {
  return (
    <div className="relative animate-fade-in">
      {activeTab === 'Details' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8 flex flex-col">
            <UserDetailsInfo
              name={(user as IUser).FirstName + " " + (user as IUser).LastName}
              email={(user as IUser).Email as string}
              phone={(user as IUser).Phone as string}
            />
            <UserDetailsMedia />
          </div>
          <div className="space-y-8 flex flex-col">
            <UserDetailsStatus user={user} />
          </div>
        </div>
      )}
      {activeTab === 'Settings' && (
        <UserDetailsSettings />
      )}
    </div>
  );
};
export default UserDetailsContent;
