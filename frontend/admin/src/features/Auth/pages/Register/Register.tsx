import "./Register.css";
import type { IRegister } from "../../../../shared/types/Auth/IRegister.types";
function Register() {
  const admin: IRegister = {} as IRegister;
  return <div>Register
    {JSON.stringify(admin)}
  </div>;
}
export default Register;
