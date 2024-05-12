import { Box } from "@radix-ui/themes";
import { useLoginState } from "./LoginPageState";
import { LoginPasswordIcon, LoginUserIcon } from "../../../../assets/index";
import CustomButton from "../../../../components/public/button/CustomButton";
import CustomTextField from "../../../../components/public/textfield/CustomTextField";
import {
  bodySmallStyle,
  headlineLargeStyle,
  headlineMediumStyle,
  loginMarginX,
  loginPaddingX,
} from "../../../../utils/StyleUtils";
import { useNavigate } from "react-router-dom";
import SupportLifeLogo from "../../../../components/manager_center/auth/SupportLifeLogo";

const LoginPage = () => {
  // eslint-disable-next-line no-unused-vars
  const { state, updateState } = useLoginState();
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 gap-2 w-full h-[100vh] p-3 bg-[#f5f5f5]">
      <div
        dir="rlt"
        className={`${loginMarginX} my-7 ${loginPaddingX} bg-white shadow-xl rounded-lg transition-all`}
      >
        <form
          onSubmit={state.handleSubmit}
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
            required={true}
            label={"الرقم الوطني"}
            placeholder="الرقم الوطني"
            value={state.nationaltyNumber}
            prefixIcon={<img src={LoginUserIcon} alt="" />}
            type="number"
            onChange={(e) => updateState({ nationaltyNumber: e.target.value })}
          />
          <CustomTextField
            size="3"
            label={"كلمة المرور"}
            placeholder="كلمة المرور"
            value={state.password}
            prefixIcon={<img src={LoginPasswordIcon} alt="" />}
            onChange={(e) => updateState({ password: e.target.value })}
            type="password"
            required={true}
          />
          <Box height="10px" />
          <CustomButton
            className={`bg-bgLogin text-blue600 h-12 shadow-lg transition-all ${headlineMediumStyle}`}
            loading={state.loading}
            title="تسجيل الدخول"
          />
          <div dir="rtl" className="flex flex-row justify-center">
            <p className={`font-medium transition-all ${bodySmallStyle}`}>
              {" "}
              {"لست مسجلاً في النظام؟"}{" "}
              <CustomButton
                variant="ghost"
                className={`text-blue600 font-medium transition-all ${bodySmallStyle}`}
                loading={state.loading}
                title="التسجيل في النظام"
                onClick={() => {
                  navigate("/register");
                }}
              />
            </p>
          </div>
        </form>
      </div>
      <SupportLifeLogo />
    </div>
  );
};

export default LoginPage;
