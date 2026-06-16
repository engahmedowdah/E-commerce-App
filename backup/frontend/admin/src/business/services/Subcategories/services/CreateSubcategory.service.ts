import connect from "../../connect";
import type { ISubcategory } from "../../../../shared/types/Subcategories/ISubcategory.types";
const CreateSubcategory: ({ subcategory }: { subcategory: ISubcategory }) => Promise<ISubcategory> = async ({ subcategory }: { subcategory: ISubcategory }) => {
    const response: ISubcategory = await connect.post({ endpoint: `/subcategory`, body: { ...subcategory } }) as ISubcategory;
    return response;
};
export default CreateSubcategory;
