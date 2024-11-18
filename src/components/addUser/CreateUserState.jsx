/* eslint-disable no-unused-vars */
import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes
const UseAddUserStateContext = createContext();
import dayjs from "dayjs";

const CreateUserState = ({ children }) => {
  const [state, setState] = useState({
    nationaltyNumber: "",
    username: "",
    genderValue: "",
    birthdate: null,
    role:"",
    contactInfo: [
      {
        use: "",
        system: "",
        value: "",
      },
    ],
    addressInfo: [
      {
        use: "",
        cityName: "",
        line: "",
        countryName: "سوريا"
      },
    ],
    permissions: [],
    selectGender: (val) => selectGender(val),
    updateContactInfo: (index, info) => updateContactInfo(index, info),
    updateAddressInfo: (index, info) => updateAddressInfo(index, info),
    addContactInfo: () => addContactInfo(),
    removeContactInfo: (index) => removeContactInfo(index),
    addAddressInfo: () => addAddressInfo(),
    removeAddressInfo: (index) => removeAddressInfo(index),
    handleSelectPermission: (val) => handleSelectPermission(val),
    removePermissions: (index) => removePermissions(index),
    selectDate: (val) => selectDate(val),
    selectRole: (val) => selectRole(val),

  });

  const selectGender = (value) => {
    updateState({ genderValue: value });
  };
  
  const selectRole = (value) => {
    let role;
    if (value === 'مريض') {
        role = 'patient';
    } else if (value === 'طبيب') {
        role = 'doctor';
    } else if (value === 'ممرض') {
        role = 'nurse';
    } else {
        role = value;
    }
    updateState({ role: role });
};

  const selectDate = (val) => {
    const formattedDate = dayjs(val).format("YYYY-MM-DD");
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

  // const updateAddressInfo = (index, newAddressInfo) => {
  //   setState((prevState) => ({
  //     ...prevState,
  //     addressInfo: prevState.addressInfo.map((contact, i) =>
  //       i === index ? { ...contact, ...newAddressInfo } : contact
  //     ),
  //   }));
  // };
  const updateAddressInfo = (index, newAddressInfo) => {
    setState((prevState) => ({
      ...prevState,
      addressInfo: prevState.addressInfo.map((contact, i) =>
        i === index ? { ...contact, ...newAddressInfo, countryName: "سوريا" } : contact
      ),
    }));
  };

  const addContactInfo = () => {
    const newContact = { use: "", system: "", value: "" };
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
      // Check if the value is already included in the permissions array
      if (prevState.permissions.includes(val)) {
        // If so, remove the value using the removePermissions function
        // This should be done outside of setState to avoid direct mutation
        return {
          ...prevState,
          permissions: prevState.permissions.filter(
            (permission) => permission !== val
          ),
        };
      } else {
        // If the value is not included, add it to the permissions array
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
    updateState,
  };

  return (
    <UseAddUserStateContext.Provider value={contextValue}>
      {children}
    </UseAddUserStateContext.Provider>
  );
};

export default CreateUserState;

CreateUserState.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom hook to use the state
// eslint-disable-next-line react-refresh/only-export-components
export const useAddUserState = () =>
  useContext(UseAddUserStateContext);
