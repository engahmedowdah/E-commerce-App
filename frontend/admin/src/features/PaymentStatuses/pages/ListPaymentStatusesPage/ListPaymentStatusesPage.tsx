import { getDefaultLimit, getDefaultSort } from "../../../../shared/utils/listDefaults";
import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import type { IPaymentStatus, IPaginatedPaymentStatuses } from "../../../../shared/types/PaymentStatuses/IPaymentStatus.types";
import { GetAllPaymentStatuses } from "../../../../business/services";
import {
  ListPaymentStatusHeader,
  PaymentStatusDashboardOverview,
  PaymentStatusListHeader,
  ListPaymentStatusCards,
  PaymentStatusPaginationFooter,
  ListPaymentStatusFooter
} from "../../components";
import "./ListPaymentStatusesPage.css";
const ListPaymentStatusesPage = () => {
  const [paymentstatuses, setPaymentStatuses] = useState<IPaymentStatus[]>([]);
  const [Loading, setLoading] = useState(true);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || String(getDefaultLimit()), 10);
  const sort = (searchParams.get("sort") || getDefaultSort()) as "newest" | "oldest" | "name_asc" | "name_desc";
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [stats, setStats] = useState({ totalItems: 0, activeItems: 0, inactiveItems: 0 });
  const fetchPaymentStatusesData = useCallback(() => {
    GetAllPaymentStatuses({ page, limit, sort })
      .then((res: IPaginatedPaymentStatuses) => {
        if (Array.isArray(res)) {
          setPaymentStatuses(res);
          setTotalPages(1);
          setTotalItems(res.length);
        } else {
          setPaymentStatuses(res?.data || []);
          setTotalPages(res?.meta?.totalPages || 1);
          setTotalItems(res?.meta?.totalItems || 0);
          setStats(res?.meta?.stats || { totalItems: 0, activeItems: 0, inactiveItems: 0 });
        }
        setLoading(false);
      })
      .catch(() => {
        setPaymentStatuses([]);
        setLoading(false);
      });
  }, [page, limit, sort]);
  useEffect(() => {
    fetchPaymentStatusesData();
  }, [fetchPaymentStatusesData, refreshTrigger]);
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
      <ListPaymentStatusHeader />
      <PaymentStatusDashboardOverview stats={stats} Loading={Loading} />
      <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
        <PaymentStatusListHeader currentSort={sort} onSortChange={handleSortChange} />
        <div className="p-6">
          <ListPaymentStatusCards
            paymentstatuses={paymentstatuses}
            Loading={Loading}
            onRefresh={handleRefresh}
          />
        </div>
        <PaymentStatusPaginationFooter
          currentPage={page}
          totalPages={totalPages}
          totalItems={totalItems}
          limit={limit}
          onPageChange={handlePageChange}
          onLimitChange={handleLimitChange}
        />
      </div>
      <ListPaymentStatusFooter />
    </div>
  );
};
export default ListPaymentStatusesPage;
