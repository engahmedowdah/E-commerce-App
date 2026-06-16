import type { IBaseEntity } from "../IBaseEntity.types";
import type { ICountry } from "../Countries/ICountry.types";
export interface ICity extends IBaseEntity {
  CountryID: string;
  Name: string;
  Country?: ICountry;
  IsActivated?: boolean;
}
export interface IPaginatedCities {
  data: ICity[];
  meta: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    limit: number;
  };
}
