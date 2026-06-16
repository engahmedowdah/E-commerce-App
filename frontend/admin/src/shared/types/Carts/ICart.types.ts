import type { IBaseEntity } from "../IBaseEntity.types";
import type { ICartProduct } from "../CartProducts/ICartProduct.types";
import type { IUser } from "../Users/IUser.types";
export interface ICart extends IBaseEntity {
  UserID: string;
  Products: ICartProduct[];
  TotalPrice: number;
  User: IUser;
}
export interface IPaginatedCarts {
  message?: string;
  data: ICart | ICart[];
  meta: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    limit: number;
    stats: {
      totalItems: number;
      totalProducts: number;
      avgProducts: number;
    };
  };
}
