import { getDefaultLimit, getDefaultSort } from "../../../../shared/utils/listDefaults";
import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import type { ICategory, IPaginatedCategories } from "../../../../shared/types/Categories/ICategory.types";
import { GetAllCategories } from "../../../../business/services";
import {
  ListCategoryHeader,
  CategoryDashboardOverview,
  CategoryListHeader,
  ListCategoryCards,
  CategoryPaginationFooter,
  ListCategoryFooter
} from "../../components";
import "./ListCategoriesPage.css";
const ListCategoriesPage = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [Loading, setLoading] = useState(true);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || String(getDefaultLimit()), 10);
  const sort = (searchParams.get("sort") || getDefaultSort()) as "newest" | "oldest" | "name_asc" | "name_desc";
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [overviewStats, setOverviewStats] = useState({ totalItems: 0, activeItems: 0, inactiveItems: 0, avgProducts: 0 });
  const fetchCategoriesData = useCallback(() => {
    GetAllCategories({ page, limit, sort })
      .then((res: IPaginatedCategories) => {
        setCategories(res.data || []);
        setTotalPages(res.meta.totalPages || 1);
        setTotalItems(res.meta.totalItems || 0);
        if (res.meta.stats) setOverviewStats(res.meta.stats);
        setLoading(false);
      })
      .catch(() => {
        setCategories([]);
        setLoading(false);
      });
  }, [page, limit, sort]);
  useEffect(() => {
    fetchCategoriesData();
  }, [fetchCategoriesData, refreshTrigger]);
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
      <ListCategoryHeader />
      <CategoryDashboardOverview stats={overviewStats} Loading={Loading} />
      <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
        <CategoryListHeader onSortChange={handleSortChange} currentSort={sort} />
        <div className="p-6">
          <ListCategoryCards
            categories={categories}
            Loading={Loading}
            onRefresh={handleRefresh}
          />
        </div>
        <CategoryPaginationFooter
          currentPage={page}
          totalPages={totalPages}
          totalItems={totalItems}
          limit={limit}
          onPageChange={handlePageChange}
          onLimitChange={handleLimitChange}
        />
      </div>
      <ListCategoryFooter />
    </div>
  );
};
export default ListCategoriesPage;
