import { getDefaultLimit, getDefaultPriceSort } from "../../../../shared/utils/listDefaults";
import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import type { IProduct, IPaginatedProducts } from "../../../../shared/types/Products/IProduct.types";
import { GetAllProducts } from "../../../../business/services";
import {
  ListProductHeader,
  ProductDashboardOverview,
  ProductListHeader,
  ListProductCards,
  ProductPaginationFooter,
  ListProductFooter
} from "../../components";
import "./ListProductsPage.css";
const ListProductsPage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [Loading, setLoading] = useState(true);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || String(getDefaultLimit()), 10);
  const sort = (searchParams.get("sort") || getDefaultPriceSort()) as "newest" | "oldest" | "name_asc" | "name_desc" | "price_asc" | "price_desc";
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [stats, setStats] = useState({ totalItems: 0, activeItems: 0, inactiveItems: 0 });
  const fetchProductsData = useCallback(() => {
    GetAllProducts({ page, limit, sort })
      .then((res: IPaginatedProducts) => {
        if (Array.isArray(res)) {
          setProducts(res);
          setTotalPages(1);
          setTotalItems(res.length);
          setStats({ totalItems: res.length, activeItems: res.filter(c => (c as IProduct).IsActivated).length, inactiveItems: res.filter(c => !(c as IProduct).IsActivated).length });
        } else {
          setProducts(res.data || []);
          setTotalPages(res.meta.totalPages || 1);
          setTotalItems(res.meta.totalItems || 0);
          setStats(res.meta.stats as { totalItems: number; activeItems: number; inactiveItems: number; });
        }
        setLoading(false);
      })
      .catch(() => {
        setProducts([]);
        setLoading(false);
      });
  }, [page, limit, sort]);
  useEffect(() => {
    fetchProductsData();
  }, [fetchProductsData, refreshTrigger]);
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
      <ListProductHeader />
      <ProductDashboardOverview stats={stats} Loading={Loading} />
      <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
        <ProductListHeader currentSort={sort} onSortChange={handleSortChange} />
        <div className="p-6">
          <ListProductCards
            products={products}
            Loading={Loading}
            onRefresh={handleRefresh}
          />
        </div>
        <ProductPaginationFooter
          currentPage={page}
          totalPages={totalPages}
          totalItems={totalItems}
          limit={limit}
          onPageChange={handlePageChange}
          onLimitChange={handleLimitChange}
        />
      </div>
      <ListProductFooter />
    </div>
  );
};
export default ListProductsPage;
