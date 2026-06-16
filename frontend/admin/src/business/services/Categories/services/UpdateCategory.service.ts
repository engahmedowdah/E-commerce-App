import { validateRequired } from "../../../validators";
import type { ICategory } from "../../../../shared/types/Categories/ICategory.types";
import connect from "../../connect";
const UpdateCategory: ({ CategoryID, category }: { CategoryID: string, category: ICategory }) => Promise<ICategory | null> = async ({ CategoryID, category }: { CategoryID: string, category: ICategory }) => {
    if (!validateRequired(CategoryID)) {
        return null;
    }
    const response: ICategory = await connect.put({ endpoint: "/category", body: { CategoryID: CategoryID, ...category } }) as ICategory;
    return response;
};
export default UpdateCategory;
