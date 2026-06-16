import type { ICategory } from "../../../../shared/types/Categories/ICategory.types";
import connect from "../../connect";
const GetCategoryBySlug: ({ slug }: { slug: string }) => Promise<ICategory> = async ({ slug }: { slug: string }) => {
    const response: ICategory = await connect.get({ endpoint: "/category/slug", body: { Slug: slug } }) as ICategory;
    return response;
};
export default GetCategoryBySlug;
