import type { IImage } from "../../../../shared/types/Image/IImage.types";
import connect from "../../connect";
const ChangeImage: ({ ImageID, image }: { ImageID: string, image: File }) => Promise<IImage> = async ({ ImageID, image }: { ImageID: string, image: File }) => {
    const response: IImage = await connect.put({ endpoint: `/image`, body: { ImageID: ImageID, image: image } }) as IImage;
    return response;
};
export default ChangeImage;
