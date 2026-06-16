import { validateRequired } from "../../../validators";
import type { IProduct } from "../../../../shared/types/Products/IProduct.types";
import connect from "../../connect";
const ActiveProductByID: ({ ProductID }: { ProductID: string }) => Promise<IProduct | null> = async ({ ProductID }: { ProductID: string }) => {
    if (!validateRequired(ProductID)) {
        return null;
    }
    const response: IProduct = await connect.put({ endpoint: `/product/active`, body: { ProductID: ProductID } }) as IProduct;
    return response;
};
export default ActiveProductByID;
