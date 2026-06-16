import { validateRequired } from "../../../validators";
import type { ICategory } from "../../../../shared/types/Categories/ICategory.types";
import connect from "../../connect";
const DeleteCategory: ({ CategoryID }: { CategoryID: string }) => Promise<ICategory | null> = async ({ CategoryID }: { CategoryID: string }) => {
    if (!validateRequired(CategoryID)) {
        return null;
    }
    const response: ICategory = await connect.del({ endpoint: "/category", body: { CategoryID: CategoryID } }) as ICategory;
    return response;
};
export default DeleteCategory;
