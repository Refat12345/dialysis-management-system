import { Button, TextField } from "@radix-ui/themes";
import { useLoginState } from "./LoginPageState";
import {
  LoginPasswordIcon,
  LoginUserIcon,
  SupportLifeImg,
} from "../../../../assets/index";

const LoginPage = () => {
  // eslint-disable-next-line no-unused-vars
  const { state, updateState } = useLoginState();

  return (
    <div className="grid grid-cols-2 w-full h-full p-3 bg-gray200">
      <form onSubmit={state.handleSubmit} className="space-y-6">
        <TextField.Root size="3" placeholder="الرقم الوطني" variant="surface">
          <TextField.Slot side="right">
            <img src={LoginUserIcon} alt="" />
          </TextField.Slot>
        </TextField.Root>
        <TextField.Root size="3" placeholder="كلمة المرور">
          <TextField.Slot side="right">
            <img src={LoginPasswordIcon} alt="" />
          </TextField.Slot>
        </TextField.Root>
        <Button className="bg-bgLogin text-blue600" loading={state.loading}>
          تسجيل الدخول
        </Button>
      </form>
      <div className="bg-bgLogin">
        <img className="" src={SupportLifeImg} alt="" />
      </div>
    </div>
  );
};

export default LoginPage;
