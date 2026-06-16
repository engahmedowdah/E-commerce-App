import type { IBaseEntity } from "../IBaseEntity.types";
export interface IImage extends IBaseEntity {
  Path: string;
  Filename: string;
  SortingNumber: number;
  URL?: string;
}
