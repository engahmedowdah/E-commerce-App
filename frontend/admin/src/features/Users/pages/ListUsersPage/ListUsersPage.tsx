import { getDefaultLimit, getDefaultSort } from "../../../../shared/utils/listDefaults";
import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import type { IUser, IPaginatedUsers } from "../../../../shared/types/Users/IUser.types";
import { GetAllUsers } from "../../../../business/services";
import {
  ListUserHeader,
  UserDashboardOverview,
  UserListHeader,
  ListUserCards,
  UserPaginationFooter,
  ListUserFooter
} from "../../components";
import "./ListUsersPage.css";
const ListUsersPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [Loading, setLoading] = useState(true);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || String(getDefaultLimit()), 10);
  const sort = (searchParams.get("sort") || getDefaultSort()) as "newest" | "oldest" | "name_asc" | "name_desc";
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [overviewStats, setOverviewStats] = useState({ totalItems: 0, activeItems: 0, inactiveItems: 0 });
  const fetchUsersData = useCallback(() => {
    GetAllUsers({ page, limit, sort })
      .then((res: IPaginatedUsers) => {
        if (Array.isArray(res)) {
          setUsers(res);
          setTotalPages(1);
          setTotalItems(res.length);
        } else {
          setUsers(res?.data || []);
          setTotalPages(res?.meta?.totalPages || 1);
          setTotalItems(res?.meta?.totalItems || 0);
          if (res?.meta?.stats) setOverviewStats(res.meta.stats);
        }
        setLoading(false);
      })
      .catch(() => {
        setUsers([]);
        setLoading(false);
      });
  }, [page, limit, sort]);
  useEffect(() => {
    fetchUsersData();
  }, [fetchUsersData, refreshTrigger]);
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
      <ListUserHeader />
      <UserDashboardOverview stats={overviewStats} Loading={Loading} />
      <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
        <UserListHeader currentSort={sort} onSortChange={handleSortChange} />
        <div className="p-6">
          <ListUserCards
            users={users}
            Loading={Loading}
            onRefresh={handleRefresh}
          />
        </div>
        <UserPaginationFooter
          currentPage={page}
          totalPages={totalPages}
          totalItems={totalItems}
          limit={limit}
          onPageChange={handlePageChange}
          onLimitChange={handleLimitChange}
        />
      </div>
      <ListUserFooter />
    </div>
  );
};
export default ListUsersPage;
