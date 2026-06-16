import { getDefaultLimit, getDefaultSort } from "../../../../shared/utils/listDefaults";
import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import type { ICountry, IPaginatedCountries } from "../../../../shared/types/Countries/ICountry.types";
import { GetAllCountries } from "../../../../business/services";
import {
  ListCountryHeader,
  CountryDashboardOverview,
  CountryListHeader,
  ListCountryCards,
  CountryPaginationFooter,
  ListCountryFooter
} from "../../components";
import "./ListCountriesPage.css";
const ListCountriesPage = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [stats, setStats] = useState({ totalItems: 0, activeItems: 0, inactiveItems: 0, totalCities: 0, avgCities: 0 });
  const [Loading, setLoading] = useState(true);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || String(getDefaultLimit()), 10);
  const sort = (searchParams.get("sort") || getDefaultSort()) as "newest" | "oldest" | "name_asc" | "name_desc";
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const fetchCountriesData = useCallback(() => {
    GetAllCountries({ page, limit, sort })
      .then((res: IPaginatedCountries) => {
        if (Array.isArray(res)) {
          setCountries(res);
          setTotalPages(1);
          setTotalItems(res.length);
        } else {
          setCountries(res?.data || []);
          setTotalPages(res?.meta?.totalPages || 1);
          setTotalItems(res?.meta?.totalItems || 0);
          setStats(res?.meta?.stats as { totalItems: number; activeItems: number; inactiveItems: number; totalCities: number; avgCities: number } || { totalItems: 0, activeItems: 0, inactiveItems: 0, totalCities: 0, avgCities: 0 });
        }
        setLoading(false);
      })
      .catch(() => {
        setCountries([]);
        setLoading(false);
      });
  }, [page, limit, sort]);
  useEffect(() => {
    fetchCountriesData();
  }, [fetchCountriesData, refreshTrigger]);
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
      <ListCountryHeader />
      <CountryDashboardOverview stats={stats} Loading={Loading} />
      <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
        <CountryListHeader currentSort={sort} onSortChange={handleSortChange} />
        <div className="p-6">
          <ListCountryCards
            countries={countries}
            Loading={Loading}
            onRefresh={handleRefresh}
          />
        </div>
        <CountryPaginationFooter
          currentPage={page}
          totalPages={totalPages}
          totalItems={totalItems}
          limit={limit}
          onPageChange={handlePageChange}
          onLimitChange={handleLimitChange}
        />
      </div>
      <ListCountryFooter />
    </div>
  );
};
export default ListCountriesPage;
