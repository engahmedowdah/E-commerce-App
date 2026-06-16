import { validateRequired } from "../../../validators/validators";
import connect from "../../connect";
import type { ICartProduct } from "../../../../shared/types/CartProducts/ICartProduct.types";
const DeleteItemFromCart: ({ UserID, ProductID }: { UserID: string, ProductID: string }) => Promise<ICartProduct | null> = async ({ UserID, ProductID }) => {
    if (!validateRequired(UserID) || !validateRequired(ProductID)) {
        return null;
    }
    const response: ICartProduct = await connect.del({ endpoint: "/cart", body: { UserID: UserID, ProductID: ProductID } }) as ICartProduct;
    return response;
};
export default DeleteItemFromCart;