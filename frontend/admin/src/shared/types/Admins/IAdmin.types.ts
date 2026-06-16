import type { IBaseEntity } from "../IBaseEntity.types";
import type { IRole } from "../Roles/IRole.types";
import type { IImage } from "../Image/IImage.types";
export interface IAdmin extends IBaseEntity {
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
  RoleID: string;
  Phone?: string;
  UserName?: string;
  IsActivated: boolean;
  IsDeleted?: boolean;
  ImageID?: string;
  PasswordConfirm: string;
  Image?: IImage;
  Role?: IRole;
}
export interface IPaginatedAdmins {
  message?: string;
  data: IAdmin[];
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
