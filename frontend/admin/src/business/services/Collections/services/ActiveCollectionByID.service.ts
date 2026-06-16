import { validateRequired } from "../../../validators";
import { ICollection } from "../../../../shared/types/Collections/ICollection.types";
import connect from "../../connect";
const ActiveCollectionByID: ({ CollectionID }: { CollectionID: string }) => Promise<ICollection | null> = async ({ CollectionID }: { CollectionID: string }) => {
    if (!validateRequired(CollectionID)) {
        return null;
    }
    const response: ICollection = await connect.patch({ endpoint: `/collection/active`, body: { id: CollectionID } }) as ICollection;
    return response;
};
export default ActiveCollectionByID;
