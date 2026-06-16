import { useEffect, useState } from "react";
import {
  GetAllCategories,
  GetAllSubcategories,
  GetAllCollections,
  GetAllCarts,
  GetAllProducts,
  GetAllOrders,
  GetAllCountries,
  GetAllPayments,
  GetAllAdmins,
  GetAllUsers,
  GetAllRoles,
  GetAllPermissions,
} from "../../../business/services";

export interface DashboardStats {
  categories: number;
  subcategories: number;
  collections: number;
  carts: number;
  products: number;
  orders: number;
  countries: number;
  payments: number;
  admins: number;
  users: number;
  roles: number;
  permissions: number;
}

const DEFAULT_STATS: DashboardStats = {
  categories: 0,
  subcategories: 0,
  collections: 0,
  carts: 0,
  products: 0,
  orders: 0,
  countries: 0,
  payments: 0,
  admins: 0,
  users: 0,
  roles: 0,
  permissions: 0,
};

const useDashboard = () => {
  const [stats, setStats] = useState<DashboardStats>(DEFAULT_STATS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const performFetch = () => {
    Promise.allSettled([
      GetAllCategories({ page: 1, limit: 1 }),
      GetAllSubcategories({ page: 1, limit: 1 }),
      GetAllCollections({ page: 1, limit: 1 }),
      GetAllCarts({ page: 1, limit: 1 }),
      GetAllProducts({ page: 1, limit: 1 }),
      GetAllOrders({ page: 1, limit: 1 }),
      GetAllCountries({ page: 1, limit: 1 }),
      GetAllPayments({ page: 1, limit: 1 }),
      GetAllAdmins({ page: 1, limit: 1 }),
      GetAllUsers({ page: 1, limit: 1 }),
      GetAllRoles({ page: 1, limit: 1 }),
      GetAllPermissions({ page: 1, limit: 1 }),
    ]).then((results) => {
      const getValue = (result: PromiseSettledResult<{ meta?: { totalItems?: number } }>) =>
        result.status === "fulfilled" ? result.value?.meta?.totalItems ?? 0 : 0;

      setStats({
        categories: getValue(results[0] as PromiseSettledResult<{ meta?: { totalItems?: number } }>),
        subcategories: getValue(results[1] as PromiseSettledResult<{ meta?: { totalItems?: number } }>),
        collections: getValue(results[2] as PromiseSettledResult<{ meta?: { totalItems?: number } }>),
        carts: getValue(results[3] as PromiseSettledResult<{ meta?: { totalItems?: number } }>),
        products: getValue(results[4] as PromiseSettledResult<{ meta?: { totalItems?: number } }>),
        orders: getValue(results[5] as PromiseSettledResult<{ meta?: { totalItems?: number } }>),
        countries: getValue(results[6] as PromiseSettledResult<{ meta?: { totalItems?: number } }>),
        payments: getValue(results[7] as PromiseSettledResult<{ meta?: { totalItems?: number } }>),
        admins: getValue(results[8] as PromiseSettledResult<{ meta?: { totalItems?: number } }>),
        users: getValue(results[9] as PromiseSettledResult<{ meta?: { totalItems?: number } }>),
        roles: getValue(results[10] as PromiseSettledResult<{ meta?: { totalItems?: number } }>),
        permissions: getValue(results[11] as PromiseSettledResult<{ meta?: { totalItems?: number } }>),
      });
      setLoading(false);
    });
  };

  const refetch = () => {
    setLoading(true);
    setError(null);
    performFetch();
  };

  useEffect(() => {
    performFetch();
  }, []);

  return { stats, loading, error, refetch };
};

export default useDashboard;
