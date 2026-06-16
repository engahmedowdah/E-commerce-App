import { getDefaultLimit, getDefaultSort } from "../../../../shared/utils/listDefaults";
import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import type { IRole, IPaginatedRoles } from "../../../../shared/types/Roles/IRole.types";
import { GetAllRoles } from "../../../../business/services";
import {
  ListRoleHeader,
  RoleDashboardOverview,
  RoleListHeader,
  ListRoleCards,
  RolePaginationFooter,
  ListRoleFooter
} from "../../components";
import "./ListRolesPage.css";
const ListRolesPage = () => {
  const [roles, setRoles] = useState<IRole[]>([]);
  const [Loading, setLoading] = useState(true);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || String(getDefaultLimit()), 10);
  const sort = (searchParams.get("sort") || getDefaultSort()) as "newest" | "oldest" | "name_asc" | "name_desc";
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [stats, setStats] = useState({ totalItems: 0, activeItems: 0, inactiveItems: 0, totalPermissions: 0, avgPermissions: 0 });
  const fetchRolesData = useCallback(() => {
    GetAllRoles({ page, limit, sort })
      .then((res: IPaginatedRoles) => {
        if (Array.isArray(res)) {
          setRoles(res);
          setTotalPages(1);
          setTotalItems(res.length);
          setStats(res?.meta?.stats || { totalItems: 0, activeItems: 0, inactiveItems: 0, totalPermissions: 0, avgPermissions: 0 });
        } else {
          setRoles(res?.data || []);
          setTotalPages(res?.meta?.totalPages || 1);
          setTotalItems(res?.meta?.totalItems || 0);
          setStats(res?.meta?.stats || { totalItems: 0, activeItems: 0, inactiveItems: 0, totalPermissions: 0, avgPermissions: 0 });
        }
        setLoading(false);
      })
      .catch(() => {
        setRoles([]);
        setLoading(false);
      });
  }, [page, limit, sort]);
  useEffect(() => {
    fetchRolesData();
  }, [fetchRolesData, refreshTrigger]);
  const handleRefresh = () => {
    setLoading(true);
    setRefreshTrigger((prev) => prev + 1);
  };
  const handlePageChange = (newPage: number) => {
    setLoading(true);
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", String(newPage));
    setSearchParams(newParams);
  };
  const handleLimitChange = (newLimit: number) => {
    setLoading(true);
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", "1");
    newParams.set("limit", String(newLimit));
    setSearchParams(newParams);
  };
  const handleSortChange = (newSort: string) => {
    setLoading(true);
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", "1");
    newParams.set("sort", newSort);
    setSearchParams(newParams);
  };
  return (
    <div className="p-8 space-y-8">
      <ListRoleHeader />
      <RoleDashboardOverview stats={stats} Loading={Loading} />
      <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
        <RoleListHeader currentSort={sort} onSortChange={handleSortChange} />
        <div className="p-6">
          <ListRoleCards
            roles={roles}
            Loading={Loading}
            onRefresh={handleRefresh}
          />
        </div>
        <RolePaginationFooter
          currentPage={page}
          totalPages={totalPages}
          totalItems={totalItems}
          limit={limit}
          onPageChange={handlePageChange}
          onLimitChange={handleLimitChange}
        />
      </div>
      <ListRoleFooter />
    </div>
  );
};
export default ListRolesPage;
