import type { ICategory } from "../../../../shared/types/Categories/ICategory.types";
import connect from "../../connect";
const CreateCategory: ({ category }: { category: ICategory }) => Promise<ICategory> = async ({ category }: { category: ICategory }) => {
    const response: ICategory = await connect.post({ endpoint: "/category", body: { ...category } }) as ICategory;
    return response;
};
export default CreateCategory;
