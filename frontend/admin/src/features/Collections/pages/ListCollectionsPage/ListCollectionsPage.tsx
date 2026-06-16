import { getDefaultLimit, getDefaultSort } from "../../../../shared/utils/listDefaults";
import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import type { ICollection, IPaginatedCollections } from "../../../../shared/types/Collections/ICollection.types";
import { GetAllCollections } from "../../../../business/services";
import {
  ListCollectionHeader,
  CollectionDashboardOverview,
  CollectionListHeader,
  ListCollectionCards,
  CollectionPaginationFooter,
  ListCollectionFooter,
} from "../../components";
import "./ListCollectionsPage.css";
const ListCollectionsPage = () => {
  const [collections, setCollections] = useState<ICollection[]>([]);
  const [Loading, setLoading] = useState(true);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || String(getDefaultLimit()), 10);
  const sort = (searchParams.get("sort") || getDefaultSort()) as "newest" | "oldest" | "name_asc" | "name_desc";
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [overviewStats, setOverviewStats] = useState({ totalItems: 0, activeItems: 0, inactiveItems: 0, avgProducts: 0 });
  const fetchCollectionsData = useCallback(() => {
    GetAllCollections({ page, limit, sort })
      .then((res: IPaginatedCollections) => {
        if (Array.isArray(res)) {
          setCollections(res);
          setTotalPages(1);
          setTotalItems(res.length);
        } else {
          setCollections(res?.data || []);
          setTotalPages(res?.meta?.totalPages || 1);
          setTotalItems(res?.meta?.totalItems || 0);
          if (res?.meta?.stats) setOverviewStats(res.meta.stats as { totalItems: number; activeItems: number; inactiveItems: number; avgProducts: number });
        }
        setLoading(false);
      })
      .catch(() => {
        setCollections([]);
        setLoading(false);
      });
  }, [page, limit, sort]);
  useEffect(() => {
    fetchCollectionsData();
  }, [fetchCollectionsData, refreshTrigger]);
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
      <ListCollectionHeader />
      <CollectionDashboardOverview stats={overviewStats} Loading={Loading} />
      <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
        <CollectionListHeader onSortChange={handleSortChange} currentSort={sort} />
        <div className="p-6">
          <ListCollectionCards
            collections={collections}
            Loading={Loading}
            onRefresh={handleRefresh}
          />
        </div>
        <CollectionPaginationFooter
          currentPage={page}
          totalPages={totalPages}
          totalItems={totalItems}
          limit={limit}
          onPageChange={handlePageChange}
          onLimitChange={handleLimitChange}
        />
      </div>
      <ListCollectionFooter />
    </div>
  );
};
export default ListCollectionsPage;
