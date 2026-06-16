import { validateRequired } from "../../../validators";
import type { IUser } from "../../../../shared/types/Users/IUser.types";
import connect from "../../connect";
const DeleteUser: ({ UserID }: { UserID: string }) => Promise<IUser | null> = async ({ UserID }: { UserID: string }) => {
    if (!validateRequired(UserID)) {
        return null;
    }
    const response: IUser = await connect.del({ endpoint: `/user`, body: { UserID: UserID } }) as IUser;
    return response;
};
export default DeleteUser;
