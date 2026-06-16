import connect from "../../connect";
import type { ISubcategory } from "../../../../shared/types/Subcategories/ISubcategory.types";
const GetSubcategoryBySlug: ({ slug }: { slug: string }) => Promise<ISubcategory> = async ({ slug }: { slug: string }) => {
    const response: ISubcategory = await connect.get({ endpoint: `/subcategory`, body: { slug: slug } }) as ISubcategory;
    return response;
};
export default GetSubcategoryBySlug;
