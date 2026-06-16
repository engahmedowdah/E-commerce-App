import type { IBaseEntity } from "../IBaseEntity.types";
export interface IPerson extends IBaseEntity {
  FirstName: string;
  LastName: string;
  Email: string;
  Password?: string;
}
