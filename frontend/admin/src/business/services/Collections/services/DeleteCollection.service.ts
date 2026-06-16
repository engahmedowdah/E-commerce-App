import { validateRequired } from "../../../validators";
import connect from "../../connect";
import type { ICollection } from "../../../../shared/types/Collections/ICollection.types";
const DeleteCollection: ({ CollectionID }: { CollectionID: string }) => Promise<ICollection | null> = async ({ CollectionID }: { CollectionID: string }) => {
    if (!validateRequired(CollectionID)) {
        return null;
    }
    const response: ICollection = await connect.del({ endpoint: `/collection`, body: { CollectionID: CollectionID } }) as ICollection;
    return response;
};
export default DeleteCollection;
