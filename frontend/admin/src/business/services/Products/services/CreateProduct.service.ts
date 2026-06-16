import { validateRequired } from "../../../validators";
import connect from "../../connect";
import type { IProduct } from "../../../../shared/types/Products/IProduct.types";
const CreateProduct: ({ product }: { product: IProduct }) => Promise<IProduct | null> = async ({ product }: { product: IProduct }) => {
    if (!validateRequired(product.Name)) {
        return null;
    }

    const response: IProduct = await connect.post({ endpoint: `/product`, body: { ...product } }) as IProduct;
    return response;
};
export default CreateProduct;
