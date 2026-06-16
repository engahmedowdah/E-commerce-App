import connect from "../../connect";
import type { IProduct } from "../../../../shared/types/Products/IProduct.types";
const GetProductByID: ({ ProductID }: { ProductID: string }) => Promise<IProduct> = async ({ ProductID }: { ProductID: string }) => {
    const response: IProduct = await connect.get({ endpoint: `/product`, body: { ProductID: ProductID } }) as IProduct;
    return response;
};
export default GetProductByID;
