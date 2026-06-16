import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { IRole } from "../../../../shared/types/Roles/IRole.types";
import { GetRoleByID } from "../../../../business/services";
import { RoleDetails } from "../../components";
import "./RoleDetailsPage.css";
const RoleDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [role, setRole] = useState<IRole | undefined>(undefined);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    if (!id) return;
    GetRoleByID({ RoleID: id })
      .then((res: IRole) => {
        setRole(res);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <RoleDetails role={role} Loading={Loading} />
    </div>
  );
};
export default RoleDetailsPage;
