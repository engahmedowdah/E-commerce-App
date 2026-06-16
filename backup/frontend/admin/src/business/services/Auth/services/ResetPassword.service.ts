import connect from "../../connect";
import type { IResetPassword } from "../../../../shared/types/Auth/IResetPassword.types";
import { validateEmail, validatePassword } from "../../../validators";
const ResetPassword: ({ resetPassword }: { resetPassword: IResetPassword }) => Promise<boolean> = async ({ resetPassword }: { resetPassword: IResetPassword }) => {
    if (!validateEmail(resetPassword.Email!) || !validatePassword(resetPassword.OldPassword!) || !validatePassword(resetPassword.NewPassword!) || resetPassword.NewPassword !== resetPassword.OldPassword) {
        return false;
    }
    const response: boolean = await connect.post({ endpoint: "/auth/reset-password", body: { ...resetPassword } }) as boolean;
    return response;
};
export default ResetPassword;
