import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";
const LoginStateContext = createContext();

export const LoginStateProvider = ({ children }) => {
  const [state, setState] = useState({
    password: "",
    nationaltyNumber: "",
    loading: false,
    handleSubmit: (event) => handleSubmit(event),
  });

  const handleSubmit = (event) => {
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
