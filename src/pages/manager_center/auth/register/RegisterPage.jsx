import { useRegisterState } from "./RegisterPageState";
import { loginMarginX, loginPaddingX } from "../../../../utils/StyleUtils";
import { Outlet } from "react-router-dom";
import SupportLifeLogo from "../../../../components/manager_center/auth/SupportLifeLogo";
const RegisterPage = () => {
  // eslint-disable-next-line no-unused-vars
  const { state, updateState } = useRegisterState();
  return (
    <div className="grid grid-cols-2 gap-2 w-full h-[100vh] p-3 bg-[#f5f5f5]">
      <div
        dir="rlt"
        className={`${loginMarginX} my-7 ${loginPaddingX} bg-white shadow-xl rounded-lg transition-all`}
      >
        <Outlet />
      </div>
      <SupportLifeLogo />
    </div>
  );
};

export default RegisterPage;
