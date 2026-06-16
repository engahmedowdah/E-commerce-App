import type { IUser } from "../../../../shared/types/Users/IUser.types";
import connect from "../../connect";
const DeleteUser: ({ UserID }: { UserID: string }) => Promise<IUser> = async ({ UserID }: { UserID: string }) => {
    const response: IUser = await connect.del({ endpoint: `/user`, body: { UserID } });
    return response;
};
export default DeleteUser;
