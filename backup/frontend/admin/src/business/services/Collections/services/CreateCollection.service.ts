import connect from "../../connect";
import type { ICollection } from "../../../../shared/types/Collections/ICollection.types";
const CreateCollection: ({ collection }: { collection: ICollection }) => Promise<ICollection> = async ({ collection }: { collection: ICollection }) => {
    const response: ICollection = await connect.post({ endpoint: `/collection`, body: { ...collection } }) as ICollection;
    return response;
};
export default CreateCollection;
