import { Box } from "@radix-ui/themes";
import { useRegisterState } from "./RegisterPageState";
import { LoginUserIcon } from "../../../../assets/index";
import CustomButton from "../../../../components/public/button/CustomButton";
import CustomTextField from "../../../../components/public/textfield/CustomTextField";
import {
  headlineLargeStyle,
  headlineMediumStyle,
  loginMarginX,
  loginPaddingX,
} from "../../../../utils/StyleUtils";
// eslint-disable-next-line no-unused-vars
import { useNavigate } from "react-router-dom";
import SupportLifeLogo from "../../../../components/manager_center/auth/SupportLifeLogo";

const RegisterCheckCodePage = () => {
  const { state, updateState } = useRegisterState();

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
          <div className="h-5"></div>
          <CustomTextField
            size="3"
            required={true}
            label={"الرقم الوطني"}
            placeholder="الرقم الوطني"
            value={state.nationaltyNumber}
            icon={<img src={LoginUserIcon} alt="" />}
            side="left"
            type="number"
            onChange={(e) => updateState({ nationaltyNumber: e.target.value })}
          />
          <Box height="10px" />
          <CustomButton
            className={`bg-bgLogin text-blue600 h-12 shadow-lg transition-all ${headlineMediumStyle}`}
            loading={state.loading}
            title="تسجيل الدخول"
          />
        </form>
      </div>
      <SupportLifeLogo />
    </div>
  );
};

export default RegisterCheckCodePage;
