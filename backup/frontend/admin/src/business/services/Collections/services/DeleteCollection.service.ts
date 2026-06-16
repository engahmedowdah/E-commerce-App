import connect from "../../connect";
import type { ICollection } from "../../../../shared/types/Collections/ICollection.types";
const DeleteCollection: ({ CollectionID }: { CollectionID: string }) => Promise<ICollection> = async ({ CollectionID }: { CollectionID: string }) => {
    const response: ICollection = await connect.del({ endpoint: `/collection`, body: { CollectionID: CollectionID } }) as ICollection;
    return response;
};
export default DeleteCollection;
