/* eslint-disable no-unused-vars */
import { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import {
  useVerifyMutation,
  useGetUserByVerificationCodeMutation,
} from "../../../../services/manager_center/auth/AuthSlice";
import { showErrorToast, showSuccessToast } from "../../../../utils/toastUtils";
import { useNavigate } from "react-router-dom";

const RegisterStateContext = createContext();

export const RegisterStateProvider = ({ children }) => {
  const navigate = useNavigate();
  const [verify, { isLoading: isVerifyLoading }] = useVerifyMutation();
  const [getUserByVerificationCode, { isLoading: isGetUserLoading }] =
    useGetUserByVerificationCodeMutation();

  const [state, setState] = useState({
    code: "",
    screenIndex: 1,
    password: "",
    nationaltyNumber: "",
    username: "",
    loading: false,
    showPassword: false,
  });

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      loading: isVerifyLoading || isGetUserLoading,
    }));
  }, [isVerifyLoading, isGetUserLoading]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.screenIndex === 1) {
      handleGetUserByVerificationCode();
    } else {
      handleVerify();
    }
  };

  const handleVerify = async () => {
    try {
      const response = await verify({
        verificationCode: state.code,
        password: state.password,
      }).unwrap();
      showSuccessToast("تم إنشاء الحساب، الرجاء تسجيل الدخول");
      navigate("/");
    } catch (error) {
      showErrorToast("حدثت مشكلة معنية حاول مجدداً");
      console.error("Failed to verify:", error);
    }
  };

  const handleGetUserByVerificationCode = async () => {
    try {
      const response = await getUserByVerificationCode({
        verificationCode: state.code,
      }).unwrap();
      showSuccessToast("الرقم المدخل صحيح");
      updateState({
        nationaltyNumber: response.user.nationalNumber,
        screenIndex: 2,
        username: response.user.fullName,
      });
    } catch (error) {
      showErrorToast(`حدثت مشكلة: ${error.data.error}`);
      console.error("Failed to get user:", error);
    }
  };

  const handleVisible = (event) => {
    setState((prevState) => ({
      ...prevState,
      showPassword: !prevState.showPassword,
    }));
    event.preventDefault();
  };

  const updateState = (newValues) => {
    setState((prevState) => ({
      ...prevState,
      ...newValues,
    }));
  };

  const contextValue = {
    state,
    handleSubmit,
    handleVisible,
    updateState,
  };

  return (
    <RegisterStateContext.Provider value={contextValue}>
      {children}
    </RegisterStateContext.Provider>
  );
};

RegisterStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useRegisterState = () => useContext(RegisterStateContext);
