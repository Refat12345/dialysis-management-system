import { Box } from "@radix-ui/themes";
import { useRegisterState } from "./RegisterPageState";
import { CheckCodeIcon } from "../../../../assets/index";
import CustomButton from "../../../../components/public/button/CustomButton";
import CustomTextField from "../../../../components/public/textfield/CustomTextField";
import { headlineMediumStyle } from "../../../../utils/StyleUtils";

const RegisterCheckCodePage = () => {
  const { state, updateState } = useRegisterState();

  return (
    <div>
      <CustomTextField
        size="3"
        required={true}
        label={"من فضلك قم بإدخال كود الدعوة الخاص بك:"}
        placeholder=""
        value={state.code}
        prefixIcon={<img src={CheckCodeIcon} alt="" />}
        type="text"
        onChange={(e) => updateState({ code: e.target.value })}
      />
      <Box height="30px" />
      <div className="w-auto">
        <CustomButton
          variant="solid"
          className={`bg-bgLogin text-blue600 h-12 shadow-lg transition-all w-full font-bold ${headlineMediumStyle}`}
          loading={state.loading}
          title="التالي"
        />
      </div>
    </div>
  );
};

export default RegisterCheckCodePage;
