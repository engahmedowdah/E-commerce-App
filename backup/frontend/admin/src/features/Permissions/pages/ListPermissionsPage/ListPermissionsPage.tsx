import { getDefaultLimit, getDefaultSort } from "../../../../shared/utils/listDefaults";
import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import type { IPermission, IPaginatedPermissions } from "../../../../shared/types/Permissions/IPermission.types";
import { GetAllPermissions } from "../../../../business/services";
import {
  ListPermissionHeader,
  PermissionDashboardOverview,
  PermissionListHeader,
  ListPermissionCards,
  PermissionPaginationFooter,
  ListPermissionFooter
} from "../../components";
import "./ListPermissionsPage.css";
const ListPermissionsPage = () => {
  const [permissions, setPermissions] = useState<IPermission[]>([]);
  const [Loading, setLoading] = useState(true);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || String(getDefaultLimit()), 10);
  const sort = (searchParams.get("sort") || getDefaultSort()) as "newest" | "oldest" | "name_asc" | "name_desc";
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [stats, setStats] = useState({ totalItems: 0, activeItems: 0, inactiveItems: 0 });
  const fetchPermissionsData = useCallback(() => {
    GetAllPermissions({ page, limit, sort })
      .then((res: IPaginatedPermissions) => {
        if (Array.isArray(res)) {
          setPermissions(res);
          setTotalPages(1);
          setTotalItems(res.length);
          setStats({ totalItems: res.length, activeItems: res.filter(c => c.IsActivated).length, inactiveItems: res.filter(c => !c.IsActivated).length });
        } else {
          setPermissions(res?.data || []);
          setTotalPages(res?.meta?.totalPages || 1);
          setTotalItems(res?.meta?.totalItems || 0);
          setStats(res?.meta?.stats || { totalItems: 0, activeItems: 0, inactiveItems: 0 });
        }
        setLoading(false);
      })
      .catch(() => {
        setPermissions([]);
        setLoading(false);
      });
  }, [page, limit, sort]);
  useEffect(() => {
    fetchPermissionsData();
  }, [fetchPermissionsData, refreshTrigger]);
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
      <ListPermissionHeader />
      <PermissionDashboardOverview stats={stats} Loading={Loading} />
      <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
        <PermissionListHeader currentSort={sort} onSortChange={handleSortChange} />
        <div className="p-6">
          <ListPermissionCards
            permissions={permissions}
            Loading={Loading}
            onRefresh={handleRefresh}
          />
        </div>
        <PermissionPaginationFooter
          currentPage={page}
          totalPages={totalPages}
          totalItems={totalItems}
          limit={limit}
          onPageChange={handlePageChange}
          onLimitChange={handleLimitChange}
        />
      </div>
      <ListPermissionFooter />
    </div>
  );
};
export default ListPermissionsPage;
