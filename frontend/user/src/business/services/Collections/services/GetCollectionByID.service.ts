import { validateRequired } from "../../../validators/validators";
import type { ICollection } from "../../../../shared/types/Collections/ICollection.types";
import connect from "../../connect";
const GetCollectionByID: ({ CollectionID }: { CollectionID: string }) => Promise<ICollection | null> = async ({ CollectionID }: { CollectionID: string }) => {
    if (!validateRequired(CollectionID)) {
        return null;
    }
    const response: ICollection = await connect.get({ endpoint: `/collection`, body: { CollectionID: CollectionID } }) as ICollection;
    return response;
};
export default GetCollectionByID;
