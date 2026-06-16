import type { ICollection } from "../../../../shared/types/Collections/ICollection.types";
import connect from "../../connect";
const GetCollectionByID: ({ CollectionID }: { CollectionID: string }) => Promise<ICollection> = async ({ CollectionID }: { CollectionID: string }) => {
    const response: ICollection = await connect.get({ endpoint: `/collection`, body: { CollectionID: CollectionID } });
    return response;
};
export default GetCollectionByID;
