import type { ICategory } from "../../../../shared/types/Categories/ICategory.types";
import connect from "../../connect";
const UpdateCategory: ({ CategoryID, category }: { CategoryID: string, category: ICategory }) => Promise<ICategory> = async ({ CategoryID, category }: { CategoryID: string, category: ICategory }) => {
    const response: ICategory = await connect.put({ endpoint: "/category", body: { CategoryID: CategoryID, ...category } }) as ICategory;
    return response;
};
export default UpdateCategory;
