import connect from "../../connect";
import { validateEmail, validatePassword } from "../../../validators/validators";
import type { ILogin } from "../../../../shared/types/Auth/ILogin.types";
const Login: ({ login }: { login: ILogin }) => Promise<boolean> = async ({ login }: { login: ILogin }) => {
    if (!validateEmail(login.Email) || !validatePassword(login.Password)) {
        return false;
    }
    const response: boolean = await connect.post({ endpoint: "/auth/login", body: { ...login } }) as boolean;
    return response;
};
export default Login;
