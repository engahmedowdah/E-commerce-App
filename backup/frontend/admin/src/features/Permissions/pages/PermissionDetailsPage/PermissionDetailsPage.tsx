import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { IPermission } from "../../../../shared/types/Permissions/IPermission.types";
import { GetPermissionByID } from "../../../../business/services";
import { PermissionDetails } from "../../components";
import "./PermissionDetailsPage.css";
const PermissionDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [permission, setPermission] = useState<IPermission | undefined>(undefined);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    if (!id) return;
    GetPermissionByID({ PermissionID: id })
      .then((res: IPermission) => {
        setPermission(res);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <PermissionDetails permission={permission} Loading={Loading} />
    </div>
  );
};
export default PermissionDetailsPage;
