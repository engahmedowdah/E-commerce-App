import type { ICategory } from "../Categories/ICategory.types";
import type { ICollection } from "../Collections/ICollection.types";
export interface ISearchWithFilters {
    CategoryIDs: { type: "array", required: false },
    Categories: ICategory[],
    CollectionIDs: { type: "array", required: false },
    Collections: ICollection[],
    MaxPrice: { type: "number", required: false },
    MinPrice: { type: "number", required: false },
    Name: { type: "string", required: true },
}
