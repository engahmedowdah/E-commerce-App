import type { IBaseEntity } from "../IBaseEntity.types";
import type { ICity } from "../Cities/ICity.types";
export interface ICountry extends IBaseEntity {
  Name: string;
  CurrencySymbol: string;
  Slug: string;
  IsActivated: boolean;
  IsDeleted?: boolean;
  Cities?: ICity[];
}
export interface IPaginatedCountries {
  message?: string;
  data: ICountry[];
  meta: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    limit: number;
    stats: {
      totalItems: number;
      activeItems: number;
      inactiveItems: number;
      totalCities: number;
      avgCities: number;
    };
  };
}
