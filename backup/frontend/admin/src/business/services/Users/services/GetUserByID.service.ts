import type { IUser } from "../../../../shared/types/Users/IUser.types";
import connect from "../../connect";
const GetUserByID: ({ UserID }: { UserID: string }) => Promise<IUser> = async ({ UserID }: { UserID: string }) => {
    const response: IUser = await connect.get({ endpoint: "/user", body: { UserID: UserID } }) as IUser;
    return response;
};
export default GetUserByID;
