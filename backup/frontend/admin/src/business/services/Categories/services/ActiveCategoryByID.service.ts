import type { ICategory } from "../../../../shared/types/Categories/ICategory.types";
import connect from "../../connect";
const ActiveCategoryByID: ({ CategoryID }: { CategoryID: string }) => Promise<ICategory> = async ({ CategoryID }: { CategoryID: string }) => {
    const response: ICategory = await connect.patch({ endpoint: "/category/active", body: { CategoryID: CategoryID } }) as ICategory;
    return response;
};
export default ActiveCategoryByID;
