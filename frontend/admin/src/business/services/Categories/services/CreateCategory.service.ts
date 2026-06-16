import { validateRequired } from "../../../validators";
import type { ICategory } from "../../../../shared/types/Categories/ICategory.types";
import connect from "../../connect";
const CreateCategory: ({ category }: { category: ICategory }) => Promise<ICategory | null> = async ({ category }: { category: ICategory }) => {
    if (!validateRequired(category.Name) || !validateRequired(category.Slug)) {
        return null;
    }

    const response: ICategory = await connect.post({ endpoint: "/category", body: { ...category } }) as ICategory;
    return response;
};
export default CreateCategory;
