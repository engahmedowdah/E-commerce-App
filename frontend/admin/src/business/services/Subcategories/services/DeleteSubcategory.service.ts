import { validateRequired } from "../../../validators";
import type { ISubcategory } from "../../../../shared/types/Subcategories/ISubcategory.types";
import connect from "../../connect";
const DeleteSubcategory: ({ SubcategoryID }: { SubcategoryID: string }) => Promise<ISubcategory | null> = async ({ SubcategoryID }: { SubcategoryID: string }) => {
    if (!validateRequired(SubcategoryID)) {
        return null;
    }
    const response: ISubcategory = await connect.del({ endpoint: `/subcategory`, body: { SubcategoryID: SubcategoryID } }) as ISubcategory;
    return response;
};
export default DeleteSubcategory;
