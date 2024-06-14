import { Box } from "@radix-ui/themes";
import { useLoginState } from "./LoginPageState";
import { LoginPasswordIcon, UserNumberIcon } from "../../../../assets/index";
import CustomButton from "../../../../components/public/button/CustomButton";
import CustomTextField from "../../../../components/public/textfield/CustomTextField";
import { ToastContainer } from "react-toastify";

import {
  bodySmallStyle,
  headlineLargeStyle,
  headlineMediumStyle,
  loginMarginX,
  loginPaddingX,
} from "../../../../utils/StyleUtils";
import { useNavigate } from "react-router-dom";
import SupportLifeLogo from "../../../../components/manager_center/auth/SupportLifeLogo";
import { PasswordVisibleIcon } from "../../../../components";

const LoginPage = () => {
  // eslint-disable-next-line no-unused-vars
  const { state, updateState, handleSubmit, handleVisible } = useLoginState();
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 gap-2 w-full h-[100vh] p-3 bg-[#f5f5f5]">
      <div
        dir="rlt"
        className={`${loginMarginX} my-7 ${loginPaddingX} bg-white shadow-xl rounded-lg transition-all`}
      >
        <form
          dir="rtl"
          onSubmit={handleSubmit}
          className="flex flex-col justify-center h-full space-y-4"
        >
          <h1
            className={`text-center ${headlineLargeStyle} font-bold text-blue600 transition-all`}
          >
            {"تسجيل الدخول"}
          </h1>
          <h3
            className={`text-center font-normal text-blue600 ${headlineMediumStyle}`}
          >
            {"!أهلاً بكم في برنامج دعمكم حياة"}
          </h3>
          <div className="h-5"></div>
          <CustomTextField
            size="3"
            label={"الرقم الوطني"}
            placeholder="الرقم الوطني"
            value={state.nationaltyNumber}
            prefixIcon={<img src={UserNumberIcon} alt="" />}
            type="number"
            onChange={(e) => updateState({ nationaltyNumber: e.target.value })}
          />
          {state.errors.nationaltyNumber && (
            <div dir="rtl" className="text-red-500 text-sm mt-1">
              {state.errors.nationaltyNumber}
            </div>
          )}
          <CustomTextField
            size="3"
            label={"كلمة المرور"}
            placeholder="كلمة المرور"
            value={state.password}
            prefixIcon={<img src={LoginPasswordIcon} alt="" />}
            suffixIcon={
              <button onClick={(e) => handleVisible(e)}>
                <PasswordVisibleIcon showPassword={state.showPassword} />
              </button>
            }
            onChange={(e) => updateState({ password: e.target.value })}
            type={state.showPassword ? "text" : "password"}
          />
          {state.errors.password && (
            <div dir="rtl" className="text-red-500 text-sm mt-1">
              {state.errors.password}
            </div>
          )}
          <Box height="10px" />
          <div className="w-auto">
            <CustomButton
              variant="solid"
              className={`bg-bgLogin text-blue600 h-12 shadow-lg transition-all w-full font-bold ${headlineMediumStyle}`}
              loading={state.loading}
              title="تسجيل الدخول"
            />
          </div>
          <ToastContainer position="bottom-left" />
          <div dir="rtl" className="flex flex-row justify-center">
            <div className={`font-semibold transition-all ${bodySmallStyle}`}>
              {"لست مسجلاً في النظام؟"}
              <CustomButton
                variant="ghost"
                className={`text-blue600 font-semibold transition-all m-0 p-1 ${bodySmallStyle}`}
                title="التسجيل في النظام"
                onClick={() => {
                  navigate("/register");
                }}
              />
            </div>
          </div>
        </form>
      </div>
      <SupportLifeLogo />
    </div>
  );
};

export default LoginPage;
