import connect from "../../connect";
import type { IProduct } from "../../../../shared/types/Products/IProduct.types";
const UpdateProduct: ({ ProductID, product }: { ProductID: string, product: Partial<IProduct> }) => Promise<IProduct> = async ({ ProductID, product }) => {
    const response: IProduct = await connect.put({ endpoint: `/product`, body: { ProductID: ProductID, ...product } }) as IProduct;
    return response;
};
export default UpdateProduct;
