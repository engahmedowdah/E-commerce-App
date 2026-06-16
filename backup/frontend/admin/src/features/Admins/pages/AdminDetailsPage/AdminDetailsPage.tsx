import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { IAdmin } from "../../../../shared/types/Admins/IAdmin.types";
import { GetAdminByID } from "../../../../business/services";
import { AdminDetails } from "../../components";
import "./AdminDetailsPage.css";
const AdminDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [admin, setAdmin] = useState<IAdmin | undefined>(undefined);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    if (!id) return;
    GetAdminByID({ AdminID: id })
      .then((res: IAdmin) => {
        setAdmin(res);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <AdminDetails admin={admin} Loading={Loading} />
    </div>
  );
};
export default AdminDetailsPage;
