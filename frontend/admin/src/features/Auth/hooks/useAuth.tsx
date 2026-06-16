import type { ILogin } from "../../../shared/types/Auth/ILogin.types";
import type { IRegister } from "../../../shared/types/Auth/IRegister.types";
import type { IResetPassword } from "../../../shared/types/Auth/IResetPassword.types";
function useAuth() {
    const login = ({
        mutationFn: async (data: ILogin) => {
            const response = await fetch("/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "Application/Json"
                },
                body: JSON.stringify(data)
            });
            return response.json();
        }
    });
    const register = ({
        mutationFn: async (data: IRegister) => {
            const response = await fetch("/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "Application/Json"
                },
                body: JSON.stringify(data)
            });
            return response.json();
        }
    });
    const resetPassword = ({
        mutationFn: async (data: IResetPassword) => {
            const response = await fetch("/auth/reset-password", {
                method: "POST",
                headers: {
                    "Content-Type": "Application/Json"
                },
                body: JSON.stringify(data)
            });
            return response.json();
        }
    });
    return {
        login,
        register,
        resetPassword
    };
}
export default useAuth;
