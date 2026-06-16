import { getDefaultLimit, getDefaultPriceSort } from "../../../../shared/utils/listDefaults";
import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import type { ICart, IPaginatedCarts } from "../../../../shared/types/Carts/ICart.types";
import { GetAllCarts } from "../../services";
import {
  ListCartHeader,
  CartDashboardOverview,
  CartListHeader,
  ListCartCards,
  CartPaginationFooter,
  ListCartFooter,
} from "../../components";
import "./ListCartsPage.css";
const ListCartsPage = () => {
  const [carts, setCarts] = useState<ICart[]>([]);
  const [Loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || String(getDefaultLimit()), 10);
  const sort = (searchParams.get("sort") || getDefaultPriceSort()) as "newest" | "oldest" | "name_asc" | "name_desc" | "price_asc" | "price_desc";
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [overviewStats, setOverviewStats] = useState({ totalItems: 0, totalProducts: 0, avgProducts: 0 });
  const fetchCartsData = useCallback(() => {
    GetAllCarts({ page, limit, sort })
      .then((res: IPaginatedCarts) => {
        if (Array.isArray(res)) {
          setCarts(res);
          setTotalPages(1);
          setTotalItems(res.length);
        } else {
          setCarts(res?.data as ICart[]);
          setTotalPages(res?.meta?.totalPages || 1);
          setTotalItems(res?.meta?.totalItems || 0);
          setOverviewStats(res?.meta?.stats as { totalItems: number; activeItems: number; inactiveItems: number; totalProducts: number; avgProducts: number });
        }
        setLoading(false);
      })
      .catch(() => {
        setCarts([]);
        setLoading(false);
      });
  }, [page, limit, sort]);
  useEffect(() => {
    fetchCartsData();
  }, [fetchCartsData]);
  const handleSortChange = (newSort: string) => {
    setLoading(true);
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", "1");
    newParams.set("sort", newSort);
    setSearchParams(newParams);
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
  return (
    <div className="p-8 space-y-8">
      <ListCartHeader />
      <CartDashboardOverview stats={overviewStats} Loading={Loading} />
      <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
        <CartListHeader onSortChange={handleSortChange} currentSort={sort}/>
        <div className="p-6">
          <ListCartCards
            carts={carts}
            Loading={Loading}
          />
        </div>
        <CartPaginationFooter
          currentPage={page}
          totalPages={totalPages}
          totalItems={totalItems}
          limit={limit}
          onPageChange={handlePageChange}
          onLimitChange={handleLimitChange}
        />
      </div>
      <ListCartFooter />
    </div>
  );
};
export default ListCartsPage;
