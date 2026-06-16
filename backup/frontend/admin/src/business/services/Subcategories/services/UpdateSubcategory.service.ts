import connect from "../../connect";
import type { ISubcategory } from "../../../../shared/types/Subcategories/ISubcategory.types";
const UpdateSubcategory: ({ SubcategoryID, subcategory }: { SubcategoryID: string, subcategory: ISubcategory }) => Promise<ISubcategory> = async ({ SubcategoryID, subcategory }: { SubcategoryID: string, subcategory: ISubcategory }) => {
    const response: ISubcategory = await connect.put({ endpoint: `/subcategory`, body: { SubcategoryID: SubcategoryID, ...subcategory } }) as ISubcategory;
    return response;
};
export default UpdateSubcategory;
