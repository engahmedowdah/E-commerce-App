import type { IBaseEntity } from "../IBaseEntity.types";
import type { ICity } from "../Cities/ICity.types";
import type { IUser } from "../Users/IUser.types";
import type { ICountry } from "../Countries/ICountry.types";
export interface IAddress extends IBaseEntity {
  UserID: string;
  CityID: string;
  CountryID: string;
  AddressLine1: string;
  AddressLine2: string;
  IsDefault: boolean;
  User: IUser;
  City: ICity;
  Country: ICountry;
}
export interface IPaginatedAddresses {
  data: IAddress[];
  meta: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    limit: number;
    stats: {
      totalItems: number;
      defaultAddresses: number;
    };
  };
}
