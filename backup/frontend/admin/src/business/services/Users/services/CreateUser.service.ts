import type { IUser } from "../../../../shared/types/Users/IUser.types";
import connect from "../../connect";
const CreateUser: ({ email, password }: { email: string, password: string }
) => Promise<IUser> = async ({ email, password }: { email: string, password: string }) => {
    const response: IUser = await connect.post({ endpoint: "/users", body: { email, password } }) as IUser;
    return response;
};
export default CreateUser;
