import type { IUser } from "../../../../shared/types/Users/IUser.types";
import connect from "../../connect";
const VerifyUser: ({ email, OTP }: { email: string, OTP: string }) => Promise<IUser> = async ({ email, OTP }: { email: string, OTP: string }) => {
    const response: IUser = await connect.post({ endpoint: `/user/verify`, body: { email, OTP } }) as IUser;
    return response;
};
export default VerifyUser;
