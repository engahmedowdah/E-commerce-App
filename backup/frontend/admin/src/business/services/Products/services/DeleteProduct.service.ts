import type { IProduct } from "../../../../shared/types/Products/IProduct.types";
import connect from "../../connect";
const DeleteProduct: ({ ProductID }: { ProductID: string }) => Promise<IProduct> = async ({ ProductID }: { ProductID: string }) => {
    const response: IProduct = await connect.del({ endpoint: `/product`, body: { ProductID: ProductID } }) as IProduct;
    return response;
};
export default DeleteProduct;
