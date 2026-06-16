import { validateRequired } from "../../../validators";
import connect from "../../connect";
import type { IImage } from "../../../../shared/types/Image/IImage.types";
const UploadImageByProductID: ({ ProductID, image }: { ProductID: string, image: Partial<File> }) => Promise<IImage | null> = async ({ ProductID, image }: { ProductID: string, image: Partial<File> }) => {
    if (!validateRequired(ProductID)) {
        return null;
    }
    const response: IImage = await connect.post({ endpoint: `/images/product`, body: { ProductID: ProductID, image: image } }) as IImage;
    return response;
};
export default UploadImageByProductID;
