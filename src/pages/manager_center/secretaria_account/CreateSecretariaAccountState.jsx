import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes
const CreateSecretariaAccountStateContext = createContext();

const CreateSecretariaAccountState = ({ children }) => {
  const [state, setState] = useState({
    nationaltyNumber: "",
    username: "",
    genderValue: "",
    birthDate: "",
    contactInfo: [
      {
        use: "",
        type: "",
        value: "",
      },
    ],
    addressInfo: [
      {
        use: "",
        city: "",
        line: "",
      },
    ],
    selectGender: (val) => selectGender(val),
    updateContactInfo: (index, info) => updateContactInfo(index, info),
    updateAddressInfo: (index, info) => updateAddressInfo(index, info),
    addContactInfo: () => addContactInfo(),
    removeContactInfo: (index) => removeContactInfo(index),
    addAddressInfo: () => addAddressInfo(),
    removeAddressInfo: (index) => removeAddressInfo(index),
  });

  const selectGender = (value) => {
    updateState({ genderValue: value });
  };

  const updateContactInfo = (index, newContactInfo) => {
    setState((prevState) => ({
      ...prevState,
      contactInfo: prevState.contactInfo.map((contact, i) =>
        i === index ? { ...contact, ...newContactInfo } : contact
      ),
    }));
  };

  const updateAddressInfo = (index, newAddressInfo) => {
    setState((prevState) => ({
      ...prevState,
      addressInfo: prevState.addressInfo.map((contact, i) =>
        i === index ? { ...contact, ...newAddressInfo } : contact
      ),
    }));
  };

  const addContactInfo = () => {
    const newContact = { use: "", type: "", value: "" };
    setState((prevState) => ({
      ...prevState,
      contactInfo: [...prevState.contactInfo, newContact],
    }));
  };

  const removeContactInfo = (index) => {
    setState((prevState) => {
      if (prevState.contactInfo.length > 1) {
        return {
          ...prevState,
          contactInfo: prevState.contactInfo.filter((_, i) => i !== index),
        };
      }
      return prevState;
    });
  };

  const addAddressInfo = () => {
    const newAddress = { use: "", city: "", line: "" };
    setState((prevState) => ({
      ...prevState,
      addressInfo: [...prevState.addressInfo, newAddress],
    }));
  };

  const removeAddressInfo = (index) => {
    setState((prevState) => {
      if (prevState.addressInfo.length > 1) {
        return {
          ...prevState,
          addressInfo: prevState.addressInfo.filter((_, i) => i !== index),
        };
      }
      return prevState;
    });
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
