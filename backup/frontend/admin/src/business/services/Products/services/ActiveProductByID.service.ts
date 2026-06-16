import type { IProduct } from "../../../../shared/types/Products/IProduct.types";
import connect from "../../connect";
const ActiveProductByID: ({ ProductID }: { ProductID: string }) => Promise<IProduct> = async ({ ProductID }: { ProductID: string }) => {
    const response: IProduct = await connect.put({ endpoint: `/product/active`, body: { ProductID: ProductID } }) as IProduct;
    return response;
};
export default ActiveProductByID;
