/* eslint-disable no-unused-vars */
import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";
import {
  useLoginMutation,
  useSendDeviceTokenMutation,
} from "../../../../services/manager_center/auth/AuthSlice";
import { useNavigate } from "react-router-dom";
import { validateLoginForm } from "../../../../validator";
import { showErrorToast, showSuccessToast } from "../../../../utils/toastUtils";
import { useDispatch } from "react-redux";
import { setUser } from "../../../../services/userSlice";
import Cookies from "js-cookie";
import {
  fcmToken,
  getMachineId,
} from "../../../../firebase/firebase-messaging";

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
  const [sendDeviceTokenApi] = useSendDeviceTokenMutation();

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
      const jsonString = JSON.stringify(response.user);
      localStorage.setItem("myObject", jsonString);
      const token = response.user.token;
      localStorage.setItem("tokens", response.user.token);
      showSuccessToast("login successfully");
      //send device Token
      const deviceToken = fcmToken;
      const deviceId = getMachineId();

      if (token) {
        navigate("/app");

        try {
          const sendDeviceTokenResponse = await sendDeviceTokenApi({
            deviceToken:deviceToken,
            deviceID: deviceId,
            token: response.user.token,
          }).unwrap();

          console.log("success success success")
  
        }
        catch (error) {
          if (error.status === 400) {
            const errorMessage = error.data.error || "حدث خطأ أثناء تحديث البيانات";
            console.error(errorMessage);
          } else if (error.status === 403) {
            const errorMessage =
              error.data.error ||
              "ليس لديك التصاريح اللازمة للوصول إلى هذه الـ API";
            console.error(errorMessage);
          } else {
            console.error("حدث خطأ أثناء تحديث البيانات", error);
          }
        } 

     
        
      }
    } catch (err) {
      console.log(err);
      if(err.data.error === "Invalid nationalNumber or password"){showErrorToast("خطأ بالرقم الوطني أو كلمة المرور");}
      else{showErrorToast("حدثت مشكلة معنية حاول مجدداً");}
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
