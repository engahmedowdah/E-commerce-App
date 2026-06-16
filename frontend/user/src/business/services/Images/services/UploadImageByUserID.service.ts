import { validateRequired } from "../../../validators/validators";
import connect from "../../connect";
import type { IImage } from "../../../../shared/types/Image/IImage.types";
const UploadImageByUserID: ({ UserID, image }: { UserID: string, image: File }) => Promise<IImage | null> = async ({ UserID, image }: { UserID: string, image: File }) => {
    if (!validateRequired(UserID)) {
        return null;
    }
    const response: IImage = await connect.post({ endpoint: `/image/user`, body: { UserID: UserID, image: image } }) as IImage;
    return response;
};
export default UploadImageByUserID;
