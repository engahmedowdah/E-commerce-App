import { validateRequired } from "../../../validators";
import connect from "../../connect";
import type { IImage } from "../../../../shared/types/Image/IImage.types";
const GetImagesByProductID: ({ ProductID }: { ProductID: string }) => Promise<IImage[]> = async ({ ProductID }: { ProductID: string }) => {
    if (!validateRequired(ProductID)) {
        return [];
    }
    const response: IImage[] = await connect.get({ endpoint: `/images/product`, body: { ProductID: ProductID } }) as IImage[];
    response.forEach((image) => {
        image.URL = connect.baseUrl.replace('/api/v1', '') + '/' + image.URL;
    });
    return response;
};
export default GetImagesByProductID;
