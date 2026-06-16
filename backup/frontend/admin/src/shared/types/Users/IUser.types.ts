import type { IBaseEntity } from "../IBaseEntity.types";
import type { IImage } from "../Image/IImage.types";
export interface IUser extends IBaseEntity {
  FirstName: string;
  LastName: string;
  Email: string;
  Phone: string;
  Password: string;
  ImageID?: string;
  Image?: IImage;
  IsActivated: boolean;
  IsDeleted: boolean;
}
export interface IPaginatedUsers {
  data: IUser[];
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
