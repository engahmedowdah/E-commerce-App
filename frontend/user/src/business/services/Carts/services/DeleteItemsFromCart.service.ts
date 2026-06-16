import { validateRequired } from "../../../validators/validators";
import connect from "../../connect";
import type { ICartProduct } from "../../../../shared/types/CartProducts/ICartProduct.types";
const DeleteItemsFromCart: ({ UserID }: { UserID: string }) => Promise<ICartProduct | null> = async ({ UserID }) => {
    if (!validateRequired(UserID)) {
        return null;
    }
    const response: ICartProduct = await connect.del({ endpoint: "/cart/clear", body: { UserID: UserID } }) as ICartProduct;
    return response;
};
export default DeleteItemsFromCart;