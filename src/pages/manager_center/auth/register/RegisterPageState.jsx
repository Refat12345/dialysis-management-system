import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";
const RegisterStateContext = createContext();

export const RegisterStateProvider = ({ children }) => {
  const [state, setState] = useState({
    code: "",
    loading: false,
    handleSubmit: (event) => handleSubmit(event),
  });

  const handleSubmit = (event) => {
    console.log("submit");
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
