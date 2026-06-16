import { validateRequired } from "../../../validators";
import type { IImage } from "../../../../shared/types/Image/IImage.types";
import connect from "../../connect";
const ChangeImage: ({ ImageID, image }: { ImageID: string, image: Partial<File> }) => Promise<IImage | null> = async ({ ImageID, image }: { ImageID: string, image: Partial<File> }) => {
    if (!validateRequired(ImageID)) {
        return null;
    }
    const response: IImage = await connect.put({ endpoint: `/image`, body: { ImageID: ImageID, image: image } }) as IImage;
    return response;
};
export default ChangeImage;
