import { getDefaultLimit, getDefaultSort } from "../../../../shared/utils/listDefaults";
import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import type { IOrderStatus, IPaginatedOrderStatuses } from "../../../../shared/types/OrderStatuses/IOrderStatus.types";
import { GetAllOrderStatuses } from "../../../../business/services";
import {
  ListOrderStatusHeader,
  OrderStatusDashboardOverview,
  OrderStatusListHeader,
  ListOrderStatusCards,
  OrderStatusPaginationFooter,
  ListOrderStatusFooter
} from "../../components";
import "./ListOrderStatusesPage.css";
const ListOrderStatusesPage = () => {
  const [orderstatuses, setOrderStatuses] = useState<IOrderStatus[]>([]);
  const [stats, setStats] = useState({ totalItems: 0, activeItems: 0, inactiveItems: 0 });
  const [Loading, setLoading] = useState(true);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || String(getDefaultLimit()), 10);
  const sort = (searchParams.get("sort") || getDefaultSort()) as "newest" | "oldest" | "name_asc" | "name_desc";
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const fetchOrderStatusesData = useCallback(() => {
    GetAllOrderStatuses({ page, limit, sort })
      .then((res: IPaginatedOrderStatuses) => {
        if (Array.isArray(res)) {
          setOrderStatuses(res);
          setTotalPages(1);
          setTotalItems(res.length);
        } else {
          setOrderStatuses(res.data || []);
          setTotalPages(res.meta.totalPages || 1);
          setTotalItems(res.meta.totalItems || 0);
          setStats(res?.meta?.stats as { totalItems: number; activeItems: number; inactiveItems: number } || { totalItems: 0, activeItems: 0, inactiveItems: 0 });
        }
        setLoading(false);
      })
      .catch(() => {
        setOrderStatuses([]);
        setLoading(false);
      });
  }, [page, limit, sort]);
  useEffect(() => {
    fetchOrderStatusesData();
  }, [fetchOrderStatusesData, refreshTrigger]);
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
      <ListOrderStatusHeader />
      <OrderStatusDashboardOverview stats={stats} Loading={Loading} />
      <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
        <OrderStatusListHeader currentSort={sort} onSortChange={handleSortChange} />
        <div className="p-6">
          <ListOrderStatusCards
            orderstatuses={orderstatuses}
            Loading={Loading}
            onRefresh={handleRefresh}
          />
        </div>
        <OrderStatusPaginationFooter
          currentPage={page}
          totalPages={totalPages}
          totalItems={totalItems}
          limit={limit}
          onPageChange={handlePageChange}
          onLimitChange={handleLimitChange}
        />
      </div>
      <ListOrderStatusFooter />
    </div>
  );
};
export default ListOrderStatusesPage;
