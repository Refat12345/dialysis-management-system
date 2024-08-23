import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { toast } from "react-toastify";
import { convertDateString } from "../../../../../utils/DateUtils";
const EditMedicalAnalysisStateContext = createContext();

const EditMedicalAnalysisState = ({ children }) => {
    const [state, setState] = useState(
    {
        id:"",
        value: "",
        unitOfMeasurement:"",
        analysisDate: null,
        notes: "",
        positive:false,
        negative:false,
        analysisName: "",
        userID:"",
        averageMin: 11, 
        averageMax: 111, 
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
        console.log("s");
        
        let valueOne = ""
        if(data.negative === true) {
            valueOne = "سلبي"
        } else if (data.positive === true) {
            valueOne = "ايجابي"
        } else {
            valueOne = data.value
        }
        const object = {
            Id: data.id,
            analysisName: data.analysisName,
            value:valueOne, 
            analysisDate: data.isEdit === true ? data.analysisDate.format("YYYY-MM-DD") :convertDateString(data.analysisDate), 
            notes: data.notes,
            userID: data.userID,
            averageMin:data.averageMin,
            averageMax:data.averageMax,
            recurrenceInterval:6,
            unitOfMeasurement: data.unitOfMeasurement
        }
        console.log(object);
        
        try {
            const response = await method(object).unwrap()
            toast.success("تم تعديل التحليل الطبي بنجاح")
            return response
        }catch (error) {
            if (error.status === 400) {
                const errorMessage = error.data.error;
                console.error(errorMessage);
                toast.error(errorMessage);
            } else if (error.status === 403) {
                const errorMessage =
                error.data.error 
                console.error(errorMessage);
                toast.error(errorMessage);
            } else {
                console.error("حدث خطأ أثناء تحديث البيانات", error);
                toast.error("حدث خطأ أثناء تحديث البيانات");
            }
        }
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
