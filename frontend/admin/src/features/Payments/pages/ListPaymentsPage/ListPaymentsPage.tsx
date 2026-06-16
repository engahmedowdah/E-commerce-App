import { getDefaultLimit, getDefaultPriceSort } from "../../../../shared/utils/listDefaults";
import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import type { IPayment, IPaginatedPayments } from "../../../../shared/types/Payments/IPayment.types";
import { GetAllPayments } from "../../../../business/services";
import {
  ListPaymentHeader,
  PaymentDashboardOverview,
  PaymentListHeader,
  ListPaymentCards,
  PaymentPaginationFooter,
  ListPaymentFooter
} from "../../components";
import "./ListPaymentsPage.css";
const ListPaymentsPage = () => {
  const [payments, setPayments] = useState<IPayment[]>([]);
  const [Loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || String(getDefaultLimit()), 10);
  const rawPriceSort = getDefaultPriceSort();
  const defaultPaymentSort = rawPriceSort === "price_desc" ? "amount_desc" : "amount_asc";
  const sort = (searchParams.get("sort") || defaultPaymentSort) as "newest" | "oldest" | "name_asc" | "name_desc" | "amount_asc" | "amount_desc";
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [stats, setStats] = useState({ totalItems: 0, activeItems: 0, inactiveItems: 0, totalAmount: 0 });
  const fetchPaymentsData = useCallback(() => {
    GetAllPayments({ page, limit, sort })
      .then((res: IPaginatedPayments) => {
        if (Array.isArray(res)) {
          setPayments(res);
          setTotalPages(1);
          setTotalItems(res.length);
        } else {
          setPayments(res?.data || []);
          setTotalPages(res?.meta?.totalPages || 1);
          setTotalItems(res?.meta?.totalItems || 0);
          setStats(res?.meta?.stats || { totalItems: 0, activeItems: 0, inactiveItems: 0, totalAmount: 0 });
        }
        setLoading(false);
      })
      .catch(() => {
        setPayments([]);
        setLoading(false);
        setStats({ totalItems: 0, activeItems: 0, inactiveItems: 0, totalAmount: 0 });
      });
  }, [page, limit, sort]);
  useEffect(() => {
    fetchPaymentsData();
  }, [fetchPaymentsData]);
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
      <ListPaymentHeader />
      <PaymentDashboardOverview stats={stats} Loading={Loading} />
      <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
        <PaymentListHeader currentSort={sort} onSortChange={handleSortChange} />
        <div className="p-6">
          <ListPaymentCards
            payments={payments}
            Loading={Loading}
          />
        </div>
        <PaymentPaginationFooter
          currentPage={page}
          totalPages={totalPages}
          totalItems={totalItems}
          limit={limit}
          onPageChange={handlePageChange}
          onLimitChange={handleLimitChange}
        />
      </div>
      <ListPaymentFooter />
    </div>
  );
};
export default ListPaymentsPage;
