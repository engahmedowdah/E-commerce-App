import type { IBaseEntity } from "../IBaseEntity.types";
import type { IImage } from "../Image/IImage.types";
import type { ICategory } from "../Categories/ICategory.types";
import type { ICollection } from "../Collections/ICollection.types";
import type { ISubcategory } from "../Subcategories/ISubcategory.types";
export interface IProduct extends IBaseEntity {
  Name: string;
  Description?: string;
  Price: number;
  Stock: number;
  Images: IImage[];
  CategoryID?: string;
  Category?: ICategory | null;
  Categories?: ICategory[];
  CollectionID?: string;
  Collection?: ICollection | null;
  Collections?: ICollection[];
  SubcategoryID?: string;
  Subcategory?: ISubcategory | null;
  Subcategories?: ISubcategory[];
  CategoryIDs?: string[];
  SubCategoryIDs?: string[];
  CollectionIDs?: string[];
  ImageIDs?: string[];
  IsActivated: boolean;
  IsDeleted?: boolean;
}
export interface IPaginatedProducts {
  message?: string;
  data: IProduct[];
  meta: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    limit: number;
    stats: {
      totalItems: number;
      activeItems: number;
      inactiveItems: number;
    };
  };
}
