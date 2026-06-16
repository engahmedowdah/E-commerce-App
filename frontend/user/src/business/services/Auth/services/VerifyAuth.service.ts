import connect from "../../connect";
import { validateEmail, validatePassword } from "../../../validators/validators";
const VerifyAuth: ({ Email, OtpCode }: { Email: string; OtpCode: string }) => Promise<boolean> = async ({ Email, OtpCode }: { Email: string; OtpCode: string }) => {
    if (!validateEmail(Email) || !validatePassword(OtpCode)) {
        return false;
    }
    const response: boolean = await connect.post({ endpoint: "/auth/verify-auth", body: { Email, OtpCode } }) as boolean;
    return response;
};
export default VerifyAuth;
