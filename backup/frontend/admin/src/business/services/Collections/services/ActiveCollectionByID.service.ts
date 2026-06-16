import { ICollection } from "../../../../shared/types/Collections/ICollection.types";
import connect from "../../connect";
const ActiveCollectionByID: ({ CollectionID }: { CollectionID: string }) => Promise<ICollection> = async ({ CollectionID }: { CollectionID: string }) => {
    const response: ICollection = await connect.patch({ endpoint: `/collection/active`, body: { id: CollectionID } }) as ICollection;
    return response;
};
export default ActiveCollectionByID;
