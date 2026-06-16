import type { IBaseEntity } from "../IBaseEntity.types";
import type { IUser } from "../Users/IUser.types";
import type { IProduct } from "../Products/IProduct.types";
export interface IReview extends IBaseEntity {
  UserID: string;
  User: IUser;
  ProductID: string;
  Product: IProduct;
  Rating: number;
  Comment?: string;
  IsActivated: boolean;
  IsDeleted?: boolean;
}
export interface IPaginatedReviews {
  message?: string;
  data: IReview[];
  meta: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    limit: number;
  };
}
