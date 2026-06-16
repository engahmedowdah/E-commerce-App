import type { IProduct } from "../Products/IProduct.types";
export interface ICartProduct {
    ProductID: string;
    Quantity: number;
    Product: IProduct;
}
