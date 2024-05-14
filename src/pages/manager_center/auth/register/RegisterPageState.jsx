import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";
const RegisterStateContext = createContext();

export const RegisterStateProvider = ({ children }) => {
  const [state, setState] = useState({
    code: "",
    screenIndex: 1,
    password: "",
    nationaltyNumber: "010100246000",
    username: "وسيم البزره",
    loading: false,
    showPassword: false,
    handleSubmit: (event) => handleSubmit(event),
    handleVisible: (event) => handleVisible(event),
  });

  const handleSubmit = (event) => {
    state.screenIndex == 1 ? updateState({ screenIndex: 2 }) : null;
    event.preventDefault();
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
