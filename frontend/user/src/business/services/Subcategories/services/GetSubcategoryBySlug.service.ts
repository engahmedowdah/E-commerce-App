import { validateRequired } from "../../../validators/validators";
import connect from "../../connect";
import type { ISubcategory } from "../../../../shared/types/Subcategories/ISubcategory.types";
const GetSubcategoryBySlug: ({ slug }: { slug: string }) => Promise<ISubcategory | null> = async ({ slug }: { slug: string }) => {
    if (!validateRequired(slug)) {
        return null;
    }
    const response: ISubcategory = await connect.get({ endpoint: `/subcategory/slug`, body: { slug: slug } }) as ISubcategory;
    return response;
};
export default GetSubcategoryBySlug;
