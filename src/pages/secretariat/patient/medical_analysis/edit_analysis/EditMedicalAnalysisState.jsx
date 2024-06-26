import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { toast } from "react-toastify";
const EditMedicalAnalysisStateContext = createContext();

const EditMedicalAnalysisState = ({ children }) => {
    const [state, setState] = useState(
    {
        id:"",
        value: "",
        unitOfMeasurement:"",
        analysisDate: null,
        notes: "",
        analysisName: "",
        userID:"",
        isEdit:false,
        postData : (value,method) => postData(value,method)
    }
);

    const updateState = (newValues) => {
        setState((prevState) => ({
            ...prevState,
            ...newValues,
    }));
};

    const postData = async (data,method) => {
        const object = {
            id: data.id,
            analysisName: data.analysisName,
            value: data.value, 
            analysisDate: data.isEdit === true ? data.analysisDate.format("YYYY-MM-DD") :data.analysisDate, 
            notes: data.notes,
            userID: data.userID,
            unitOfMeasurement: data.unitOfMeasurement
        }
        console.log(object);
        try {
            const response = await method(object)
            console.log(response);
            toast("تم تعديل التحليل الطبي بنجاح")
            return response
        }catch(err){console.log(err); }
}
    const contextValue = {
        state,
        updateState,
};

    return (
        <EditMedicalAnalysisStateContext.Provider value={contextValue}>
            {children}
        </EditMedicalAnalysisStateContext.Provider>
);
};

export default EditMedicalAnalysisState;

EditMedicalAnalysisState.propTypes = {
    children: PropTypes.node.isRequired,
};

// Custom hook to use the state
// eslint-disable-next-line react-refresh/only-export-components
export const useEditMedicalAnalysisState = () =>
    useContext(EditMedicalAnalysisStateContext);
