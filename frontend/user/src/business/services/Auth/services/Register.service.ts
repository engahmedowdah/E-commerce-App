import type { IRegister } from "../../../../shared/types/Auth/IRegister.types";
import connect from "../../connect";
import { validateEmail, validatePassword } from "../../../validators/validators";
const Register: ({ register }: { register: IRegister }) => Promise<boolean> = async ({ register }: { register: IRegister }) => {
    if (!validateEmail(register.User.Email!) || !validatePassword(register.User.Password!)) {
        return false;
    }
    const response: boolean = await connect.post({ endpoint: "/auth/register", body: { ...register } }) as boolean;
    return response;
};
export default Register;
