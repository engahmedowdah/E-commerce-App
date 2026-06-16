import { validateRequired } from "../../../validators";
import connect from "../../connect";
import type { ISubcategory } from "../../../../shared/types/Subcategories/ISubcategory.types";
const CreateSubcategory: ({ subcategory }: { subcategory: ISubcategory }) => Promise<ISubcategory | null> = async ({ subcategory }: { subcategory: ISubcategory }) => {
    if (!validateRequired(subcategory.Name) || !validateRequired(subcategory.Slug) || !validateRequired(subcategory.CategoryID)) {
        return null;
    }

    const response: ISubcategory = await connect.post({ endpoint: `/subcategory`, body: { ...subcategory } }) as ISubcategory;
    return response;
};
export default CreateSubcategory;
