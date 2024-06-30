/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import dayjs from "dayjs";

const CreateSecretariaAccountStateContext = createContext();

const CreateSecretariaAccountState = ({ children }) => {
  const [state, setState] = useState({
    nationaltyNumber: "",
    username: "",
    genderValue: "",
    birthdate: null,
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
    permissions: [],
  });

  const selectGender = (value) => {
    updateState({ genderValue: value });
  };

  const selectDate = (val) => {
    const formattedDate = dayjs(val).format("YYYY-MM-DD");
    console.log("Formatted Date:", formattedDate);
    updateState({ birthdate: dayjs(val) });
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
      addressInfo: prevState.addressInfo.map((address, i) =>
        i === index ? { ...address, ...newAddressInfo } : address
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

  const handleSelectPermission = (val) => {
    setState((prevState) => {
      if (prevState.permissions.includes(val)) {
        return {
          ...prevState,
          permissions: prevState.permissions.filter(
            (permission) => permission !== val
          ),
        };
      } else {
        return {
          ...prevState,
          permissions: [...prevState.permissions, val],
        };
      }
    });
  };

  const removePermissions = (val) => {
    setState((prevState) => ({
      ...prevState,
      permissions: prevState.permissions.filter((v) => v !== val),
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
    selectGender,
    selectDate,
    updateContactInfo,
    updateAddressInfo,
    addContactInfo,
    removeContactInfo,
    addAddressInfo,
    removeAddressInfo,
    handleSelectPermission,
    removePermissions,
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
export const useCreateSecretaryAccountState = () =>
  useContext(CreateSecretariaAccountStateContext);
