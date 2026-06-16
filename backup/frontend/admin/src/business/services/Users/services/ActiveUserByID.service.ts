import type { IUser } from "../../../../shared/types/Users/IUser.types";
import connect from "../../connect";
import { GetImageByID } from "../../Images";
const ActiveUserByID: ({ UserID }: { UserID: string }) => Promise<IUser> = async ({ UserID }: { UserID: string }) => {
    const response: IUser = await connect.put({ endpoint: `/user/active`, body: { UserID: UserID } }) as IUser;
    try {
        if(response.ImageID) {
            response.Image = await GetImageByID({ ImageID: response.ImageID });
        }
    } catch {  }
    return response;
};
export default ActiveUserByID;
