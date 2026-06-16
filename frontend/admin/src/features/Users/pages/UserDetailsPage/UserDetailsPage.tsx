import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { IUser } from "../../../../shared/types/Users/IUser.types";
import { GetUserByID } from "../../../../business/services";
import { UserDetails } from "../../components";
import "./UserDetailsPage.css";
const UserDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<IUser | undefined>(undefined);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    if (!id) return;
    GetUserByID({ UserID: id })
      .then((res: IUser) => {
        setUser(res);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <UserDetails user={user} Loading={Loading} />
    </div>
  );
};
export default UserDetailsPage;
