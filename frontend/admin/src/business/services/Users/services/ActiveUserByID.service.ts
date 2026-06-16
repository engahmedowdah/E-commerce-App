import { validateRequired } from "../../../validators";
import type { IUser } from "../../../../shared/types/Users/IUser.types";
import connect from "../../connect";
import { GetImageByID } from "../../Images";
const ActiveUserByID: ({ UserID }: { UserID: string }) => Promise<IUser | null> = async ({ UserID }: { UserID: string }) => {
    if (!validateRequired(UserID)) {
        return null;
    }
    const response: IUser = await connect.put({ endpoint: `/user/active`, body: { UserID: UserID } }) as IUser;
    try {
        if (response.ImageID) {
            const image = await GetImageByID({ ImageID: response.ImageID });
            if (image) {
                response.Image = image;
            }
        }
    } catch {
        return null;
    }
    return response;
};
export default ActiveUserByID;
