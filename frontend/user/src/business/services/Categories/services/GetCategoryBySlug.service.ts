import { validateRequired } from "../../../validators/validators";
import type { ICategory } from "../../../../shared/types/Categories/ICategory.types";
import connect from "../../connect";
const GetCategoryBySlug: ({ slug }: { slug: string }) => Promise<ICategory | null> = async ({ slug }: { slug: string }) => {
    if (!validateRequired(slug)) {
        return null;
    }
    const response: ICategory = await connect.get({ endpoint: "/category/slug", body: { Slug: slug } }) as ICategory;
    return response;
};
export default GetCategoryBySlug;
