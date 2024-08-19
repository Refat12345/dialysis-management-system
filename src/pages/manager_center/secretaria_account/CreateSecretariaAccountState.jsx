/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
// src/state/CreateSecretariaAccountState.js
import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import dayjs from "dayjs";
import { useAddUserMutation } from "../../../services/manager_center/user/AddUserSlice";
import { showErrorToast, showSuccessToast } from "../../../utils/toastUtils";
import { useNavigate } from "react-router-dom";
import { permissionsOptionsValues } from "./secretaria_sections/secretariaData";
import { toast } from "react-toastify";

const CreateSecretariaAccountStateContext = createContext();

const CreateSecretariaAccountState = ({ children }) => {
  const navigate = useNavigate();

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

  const [createUser, { isLoading }] = useAddUserMutation();

  const selectGender = (value) => {
    updateState({ genderValue: value });
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const permissions = state.permissions.map((e, index) =>
      permissionsOptionsValues(index)
    );
    if (state.nationaltyNumber.length > 11) {
      showSuccessToast("الرقم الوطني لا يجب أن يكون أكبر من 11 رقم");
      return;
    }
    if (state.genderValue == "") {
      showSuccessToast("حقل الجنس مطلوب");
      return;
    }
    const userData = {
      fullName: state.username,
      nationalNumber: state.nationaltyNumber,
      dateOfBirth: state.birthdate ? state.birthdate.format("YYYY-MM-DD") : "",
      gender: state.genderValue,
      role: "secretary",
      telecom: state.contactInfo.map((contact) => ({
        system: contact.type,
        value: contact.value,
        use: contact.use,
      })),
      address: state.addressInfo.map((address) => ({
        line: address.line,
        use: address.use,
        cityName: address.city,
        countryName: "سوريا",
      })),
      permissionNames: permissions,
    };
    try {
      await createUser(userData).unwrap();
      toast.success("تم إضافة سكرتاريا بنجاح");
    } catch (err) {
      toast.error("حدثت مشكلة معنية حاول مجدداً");
      console.log(err);
    }
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
    handleSubmit,
    isLoading,
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
