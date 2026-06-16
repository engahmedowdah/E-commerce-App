import connect from "../../connect";
import type { IProduct } from "../../../../shared/types/Products/IProduct.types";
const CreateProduct: ({ product }: { product: IProduct }) => Promise<IProduct> = async ({ product }: { product: IProduct }) => {
    const response: IProduct = await connect.post({ endpoint: `/product`, body: { ...product } }) as IProduct;
    return response;
};
export default CreateProduct;
