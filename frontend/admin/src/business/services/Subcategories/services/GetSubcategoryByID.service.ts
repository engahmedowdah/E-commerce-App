import { validateRequired } from "../../../validators";
import connect from "../../connect";
import type { ISubcategory } from "../../../../shared/types/Subcategories/ISubcategory.types";
const GetSubcategoryByID: ({ SubcategoryID }: { SubcategoryID: string }) => Promise<ISubcategory | null> = async ({ SubcategoryID }: { SubcategoryID: string }) => {
    if (!validateRequired(SubcategoryID)) {
        return null;
    }
    const response: ISubcategory = await connect.get({ endpoint: `/subcategory`, body: { SubcategoryID: SubcategoryID } }) as ISubcategory;
    return response;
};
export default GetSubcategoryByID;
