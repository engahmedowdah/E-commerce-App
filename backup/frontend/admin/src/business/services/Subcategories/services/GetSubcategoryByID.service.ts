import connect from "../../connect";
import type { ISubcategory } from "../../../../shared/types/Subcategories/ISubcategory.types";
const GetSubcategoryByID: ({ SubcategoryID }: { SubcategoryID: string }) => Promise<ISubcategory> = async ({ SubcategoryID }: { SubcategoryID: string }) => {
    const response: ISubcategory = await connect.get({ endpoint: `/subcategory`, body: { SubcategoryID: SubcategoryID } }) as ISubcategory;
    return response;
};
export default GetSubcategoryByID;
