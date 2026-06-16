import type { ISubcategory } from "../../../../shared/types/Subcategories/ISubcategory.types";
import connect from "../../connect";
const DeleteSubcategory: ({ SubcategoryID }: { SubcategoryID: string }) => Promise<ISubcategory> = async ({ SubcategoryID }: { SubcategoryID: string }) => {
    const response: ISubcategory = await connect.del({ endpoint: `/subcategory`, body: { SubcategoryID: SubcategoryID } }) as ISubcategory;
    return response;
};
export default DeleteSubcategory;
