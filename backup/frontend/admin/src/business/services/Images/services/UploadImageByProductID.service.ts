import connect from "../../connect";
import type { IImage } from "../../../../shared/types/Image/IImage.types";
const UploadImageByProductID: ({ ProductID, image }: { ProductID: string, image: File }) => Promise<IImage> = async ({ ProductID, image }: { ProductID: string, image: File }) => {
    const response: IImage = await connect.post({ endpoint: `/images/product`, body: { ProductID: ProductID, image: image } }) as IImage;
    return response;
};
export default UploadImageByProductID;
