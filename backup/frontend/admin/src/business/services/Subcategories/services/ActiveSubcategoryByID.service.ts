import connect from "../../connect";
import type { ISubcategory } from "../../../../shared/types/Subcategories/ISubcategory.types";
const ActiveSubcategoryByID: ({ SubcategoryID }: { SubcategoryID: string }) => Promise<ISubcategory> = async ({ SubcategoryID }: { SubcategoryID: string }) => {
    const response: ISubcategory = await connect.patch({ endpoint: `/subcategory/active`, body: { SubcategoryID: SubcategoryID } }) as ISubcategory;
    return response;
};
export default ActiveSubcategoryByID;
