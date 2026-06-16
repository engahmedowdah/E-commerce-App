import { validateRequired } from "../../../validators";
import connect from "../../connect";
import type { ICollection } from "../../../../shared/types/Collections/ICollection.types";
const UpdateCollection: ({ CollectionID, collection }: { CollectionID: string, collection: ICollection }) => Promise<ICollection | null> = async ({ CollectionID, collection }: { CollectionID: string, collection: ICollection }) => {
    if (!validateRequired(CollectionID) || !validateRequired(collection.Name) || !validateRequired(collection.Slug)) {
        return null;
    }
    const response: ICollection = await connect.put({ endpoint: `/collection`, body: { CollectionID: CollectionID, ...collection } }) as ICollection;
    return response;
};
export default UpdateCollection;
