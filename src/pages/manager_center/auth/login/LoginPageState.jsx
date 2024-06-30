/* eslint-disable no-unused-vars */
import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";
import { useLoginMutation } from "../../../../services/manager_center/auth/AuthSlice";
import { useNavigate } from "react-router-dom";
import { validateLoginForm } from "../../../../validator";
import { showErrorToast, showSuccessToast } from "../../../../utils/toastUtils";
import { useDispatch } from "react-redux";
import { setUser } from "../../../../services/userSlice";
import Cookies from "js-cookie";

const LoginStateContext = createContext();

export const LoginStateProvider = ({ children }) => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    password: "",
    nationaltyNumber: "",
    loading: false,
    showPassword: false,
    errors: {},
  });
  const dispatch = useDispatch();

  const [loginApi, { error }] = useLoginMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setState((prevState) => ({ ...prevState, errors: {}, loading: true }));

    // Validate the form data
    const validationErrors = validateLoginForm({
      nationaltyNumber: state.nationaltyNumber,
      // password: state.password,
      password: "Waseem@123",
    });

    if (Object.keys(validationErrors).length > 0) {
      setState((prevState) => ({
        ...prevState,
        errors: validationErrors,
        loading: false,
      }));
      return;
    }

    try {
      const response = await loginApi({
        nationalNumber: state.nationaltyNumber,
        password: state.password,
      }).unwrap();
      Cookies.set("role", response.user.role);
      const token = Cookies.set("token", response.user.token);
      dispatch(setUser(response.user));
      sessionStorage.setItem("user", JSON.stringify(response.user));
      showSuccessToast("login successfully");
      if (token) {
        navigate("/app");
      }
    } catch (err) {
      showErrorToast("حدثت مشكلة معنية حاول مجدداً");
      setState((prevState) => ({ ...prevState, errors: {}, loading: false }));
    }

    setState((prevState) => ({ ...prevState, loading: false }));
  };

  const handleVisible = (event) => {
    event.preventDefault();
    setState((prevState) => ({
      ...prevState,
      showPassword: !prevState.showPassword,
    }));
  };

  const updateState = (newValues) => {
    setState((prevState) => ({
      ...prevState,
      ...newValues,
    }));
  };

  const contextValue = {
    state,
    updateState,
    handleSubmit,
    handleVisible,
  };

  return (
    <LoginStateContext.Provider value={contextValue}>
      {children}
    </LoginStateContext.Provider>
  );
};

LoginStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLoginState = () => useContext(LoginStateContext);
