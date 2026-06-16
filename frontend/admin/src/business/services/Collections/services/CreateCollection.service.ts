import { validateRequired } from "../../../validators";
import connect from "../../connect";
import type { ICollection } from "../../../../shared/types/Collections/ICollection.types";
const CreateCollection: ({ collection }: { collection: ICollection }) => Promise<ICollection | null> = async ({ collection }: { collection: ICollection }) => {
    if (!validateRequired(collection.Name) || !validateRequired(collection.Slug)) {
        return null;
    }

    const response: ICollection = await connect.post({ endpoint: `/collection`, body: { ...collection } }) as ICollection;
    return response;
};
export default CreateCollection;
