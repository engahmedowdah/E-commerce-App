import { validateRequired } from "../../../validators";
import connect from "../../connect";
import type { IProduct } from "../../../../shared/types/Products/IProduct.types";
const GetProductByID: ({ ProductID }: { ProductID: string }) => Promise<IProduct | null> = async ({ ProductID }: { ProductID: string }) => {
    if (!validateRequired(ProductID)) {
        return null;
    }
    const response: IProduct = await connect.get({ endpoint: `/product`, body: { ProductID: ProductID } }) as IProduct;
    return response;
};
export default GetProductByID;
