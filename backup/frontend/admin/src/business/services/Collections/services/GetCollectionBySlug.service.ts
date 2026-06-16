import connect from "../../connect";
import type { ICollection } from "../../../../shared/types/Collections/ICollection.types";
const GetCollectionBySlug: ({ slug }: { slug: string }) => Promise<ICollection> = async ({ slug }: { slug: string }) => {
    const response: ICollection = await connect.get({ endpoint: `/collection/slug`, body: { slug } }) as ICollection;
    return response;
};
export default GetCollectionBySlug;
