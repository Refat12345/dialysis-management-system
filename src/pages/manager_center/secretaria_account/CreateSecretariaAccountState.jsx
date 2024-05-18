import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes
const CreateSecretariaAccountStateContext = createContext();

const CreateSecretariaAccountState = ({ children }) => {
  const [state, setState] = useState({
    nationaltyNumber: "",
    username: "",
    genderValue: "",
    birthDate: "",
    selectGender: (val) => selectGender(val),
  });

  const selectGender = (value) => {
    updateState({ genderValue: value });
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
    <CreateSecretariaAccountStateContext.Provider value={contextValue}>
      {children}
    </CreateSecretariaAccountStateContext.Provider>
  );
};

export default CreateSecretariaAccountState;

CreateSecretariaAccountState.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom hook to use the state
// eslint-disable-next-line react-refresh/only-export-components
export const useCreateSecretaryAccountState = () =>
  useContext(CreateSecretariaAccountStateContext);
