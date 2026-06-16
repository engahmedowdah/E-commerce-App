import type { ICategory } from "../../../../shared/types/Categories/ICategory.types";
import connect from "../../connect";
const DeleteCategory: ({ CategoryID }: { CategoryID: string }) => Promise<ICategory> = async ({ CategoryID }: { CategoryID: string }) => {
    const response: ICategory = await connect.del({ endpoint: "/category", body: { CategoryID: CategoryID } }) as ICategory;
    return response;
};
export default DeleteCategory;
