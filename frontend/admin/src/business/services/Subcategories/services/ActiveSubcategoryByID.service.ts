import { validateRequired } from "../../../validators";
import connect from "../../connect";
import type { ISubcategory } from "../../../../shared/types/Subcategories/ISubcategory.types";
const ActiveSubcategoryByID: ({ SubcategoryID }: { SubcategoryID: string }) => Promise<ISubcategory | null> = async ({ SubcategoryID }: { SubcategoryID: string }) => {
    if (!validateRequired(SubcategoryID)) {
        return null;
    }
    const response: ISubcategory = await connect.patch({ endpoint: `/subcategory/active`, body: { SubcategoryID: SubcategoryID } }) as ISubcategory;
    return response;
};
export default ActiveSubcategoryByID;
