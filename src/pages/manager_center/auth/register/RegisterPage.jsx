import { useRegisterState } from "./RegisterPageState";
import SupportLifeLogo from "../../../../components/manager_center/auth/SupportLifeLogo";
import {
  headlineLargeStyle,
  loginMarginX,
  loginPaddingX,
} from "../../../../utils/StyleUtils";
import RegisterCheckCodePage from "./RegisterCheckCodePage";
import RegisterCreateAccount from "./RegisterCreateAccount";
import { ToastContainer } from "react-toastify";

const RegisterPage = () => {
  const { state, handleSubmit } = useRegisterState();

  return (
    <div className="grid grid-cols-2 gap-2 w-full h-[100vh] p-3 bg-[#f5f5f5]">
      <div
        dir="rlt"
        className={`${loginMarginX} my-7 ${loginPaddingX} bg-white shadow-xl rounded-lg transition-all`}
      >
        <form
          onSubmit={handleSubmit} // Ensure this calls handleSubmit correctly
          className="flex flex-col justify-center h-full space-y-4"
        >
          <h1
            className={`text-center ${headlineLargeStyle} font-bold text-blue600 transition-all`}
          >
            {"التسجيل في النظام"}
          </h1>
          <div className="h-4"></div>
          {state.screenIndex === 1 && <RegisterCheckCodePage />}
          {state.screenIndex === 2 && <RegisterCreateAccount />}
          <ToastContainer />
        </form>
      </div>
      <SupportLifeLogo />
    </div>
  );
};

export default RegisterPage;
