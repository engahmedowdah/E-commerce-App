import { validateRequired } from "../../../validators";
import type { IUser } from "../../../../shared/types/Users/IUser.types";
import connect from "../../connect";
const UpdateUser: ({ UserID, user }: { UserID: string, user: IUser }) => Promise<IUser | null> = async ({ UserID, user }: { UserID: string, user: IUser }) => {
    if (!validateRequired(UserID)) {
        return null;
    }
    const bodyPayload = {
        UserID: UserID,
        FirstName: user.FirstName,
        LastName: user.LastName,
        Email: user.Email,
        Password: user.Password,
        IsActivated: user.IsActivated,
        IsDeleted: user.IsDeleted,
    };
    const response: IUser = await connect.put({ endpoint: `/user`, body: bodyPayload }) as IUser;
    return response;
};
export default UpdateUser;
