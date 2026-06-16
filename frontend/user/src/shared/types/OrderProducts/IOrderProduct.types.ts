import type { IProduct } from "../Products/IProduct.types";
export interface IOrderProduct {
    Quantity: number;
    Product: IProduct;
    ProductID: string;
}
