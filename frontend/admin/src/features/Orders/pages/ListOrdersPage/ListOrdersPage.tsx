import { getDefaultLimit, getDefaultPriceSort } from "../../../../shared/utils/listDefaults";
import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import type { IOrder, IPaginatedOrders } from "../../../../shared/types/Orders/IOrder.types";
import { GetAllOrders } from "../../../../business/services";
import {
  ListOrderHeader,
  OrderDashboardOverview,
  OrderListHeader,
  ListOrderCards,
  OrderPaginationFooter,
  ListOrderFooter
} from "../../components";
import "./ListOrdersPage.css";
const ListOrdersPage = () => {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [Loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || String(getDefaultLimit()), 10);
  const sort = (searchParams.get("sort") || getDefaultPriceSort()) as "newest" | "oldest" | "total_amount_desc" | "total_amount_asc" | "name_asc" | "name_desc" | "price_asc" | "price_desc";
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [stats, setStats] = useState({ totalItems: 0, avgProducts: 0, totalProducts: 0, totalAmount: 0, statusCounts: {} as Record<string, number> });
  const fetchOrdersData = useCallback(() => {
    GetAllOrders({ page, limit, sort })
      .then((res: IPaginatedOrders) => {
        if (Array.isArray(res)) {
          setOrders(res);
          setTotalPages(1);
          setTotalItems(res.length);
        } else {
          setOrders(res?.data || []);
          setTotalPages(res?.meta?.totalPages || 1);
          setTotalItems(res?.meta?.totalItems || 0);
          setStats(res?.meta?.stats as { totalItems: number; avgProducts: number; totalProducts: number; totalAmount: number; statusCounts: Record<string, number> });
        }
        setLoading(false);
      })
      .catch(() => {
        setOrders([]);
        setLoading(false);
      });
  }, [page, limit, sort]);
  useEffect(() => {
    fetchOrdersData();
  }, [fetchOrdersData]);
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
      <ListOrderHeader />
      <OrderDashboardOverview stats={stats} Loading={Loading} />
      <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
        <OrderListHeader currentSort={sort} onSortChange={handleSortChange} />
        <div className="p-6">
          <ListOrderCards
            orders={orders}
            Loading={Loading}
          />
        </div>
        <OrderPaginationFooter
          currentPage={page}
          totalPages={totalPages}
          totalItems={totalItems}
          limit={limit}
          onPageChange={handlePageChange}
          onLimitChange={handleLimitChange}
        />
      </div>
      <ListOrderFooter />
    </div>
  );
};
export default ListOrdersPage;
