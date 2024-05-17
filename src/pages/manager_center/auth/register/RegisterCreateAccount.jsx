import { Box } from "@radix-ui/themes";
import { useRegisterState } from "./RegisterPageState";
import CustomButton from "../../../../components/public/button/CustomButton";
import CustomTextField from "../../../../components/public/textfield/CustomTextField";
import {
  bodySmallStyle,
  headlineMediumStyle,
} from "../../../../utils/StyleUtils";
import { PasswordVisibleIcon } from "../../../../components";
import {
  LoginPasswordIcon,
  UserNumberIcon,
  LoginUserIcon,
} from "../../../../assets/index";

const RegisterCreateAccount = () => {
  const { state, updateState } = useRegisterState();

  return (
    <div>
      <CustomTextField
        size="3"
        required={true}
        label={"اسم المستخدم:"}
        placeholder="اسم المستخدم"
        value={state.username}
        prefixIcon={<img src={LoginUserIcon} alt="" />}
        readOnly={true}
        type="text"
      />
      <Box height="10px" />
      <CustomTextField
        size="3"
        required={true}
        label={"الرقم الوطني:"}
        placeholder="الرقم الوطني"
        value={state.nationaltyNumber}
        prefixIcon={<img src={UserNumberIcon} alt="" />}
        readOnly={true}
        type="number"
      />
      <Box height="10px" />
      <CustomTextField
        size="3"
        label={"كلمة المرور"}
        placeholder="كلمة المرور"
        value={state.password}
        prefixIcon={<img src={LoginPasswordIcon} alt="" />}
        suffixIcon={
          <button onClick={(e) => state.handleVisible(e)}>
            <PasswordVisibleIcon showPassword={state.showPassword} />
          </button>
        }
        onChange={(e) => updateState({ password: e.target.value })}
        type={state.showPassword ? "text" : "password"}
        required={true}
      />
      <p dir="rtl" className={`font-bold ${bodySmallStyle} text-blue600 mt-2`}>
        يجب ألا تقل كلمة المرور عن 8 من الأحرف ، وأن يكون فيها حرف مميز
      </p>
      <Box height="30px" />
      <div className="w-auto">
        <CustomButton
          variant="solid"
          className={`bg-bgLogin text-blue600 h-12 shadow-lg transition-all w-full font-bold ${headlineMediumStyle}`}
          loading={state.loading}
          title="التسجيل في النظام"
        />
      </div>
    </div>
  );
};

export default RegisterCreateAccount;
