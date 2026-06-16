import { validateRequired } from "../../../validators";
import type { ICategory } from "../../../../shared/types/Categories/ICategory.types";
import connect from "../../connect";
const ActiveCategoryByID: ({ CategoryID }: { CategoryID: string }) => Promise<ICategory | null> = async ({ CategoryID }: { CategoryID: string }) => {
    if (!validateRequired(CategoryID)) {
        return null;
    }
    const response: ICategory = await connect.patch({ endpoint: "/category/active", body: { CategoryID: CategoryID } }) as ICategory;
    return response;
};
export default ActiveCategoryByID;
