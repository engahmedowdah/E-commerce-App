import connect from "../../connect";
import type { ICollection } from "../../../../shared/types/Collections/ICollection.types";
const UpdateCollection: ({ CollectionID, collection }: { CollectionID: string, collection: ICollection }) => Promise<ICollection> = async ({ CollectionID, collection }: { CollectionID: string, collection: ICollection }) => {
    const response: ICollection = await connect.put({ endpoint: `/collection`, body: { CollectionID: CollectionID, ...collection } }) as ICollection;
    return response;
};
export default UpdateCollection;
