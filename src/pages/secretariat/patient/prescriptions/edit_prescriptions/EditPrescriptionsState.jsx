import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { toast } from "react-toastify";
const EditPrescriptionsStateContext = createContext();

const EditPrescriptionsState = ({ children }) => {
    const [state, setState] = useState(
    {
        id: "",
        name: "",
        dateOfStart: "",
        dateOfEnd: "",
        details: "",
        isEditStart:false,
        isEditEnd:false,
        postData : (data , prescriptionId,patientId , method) => postData(data , prescriptionId,patientId , method)
    }
);

    const updateState = (newValues) => {
        setState((prevState) => ({
            ...prevState,
            ...newValues,
    }));
};

    const postData = async(data , prescriptionId,patientId , method) => {
        const object = {
            "patientID": patientId,
            "medicines": [
                {
                    "id":data.id,
                    "name": data.name,
                    "dateOfStart": data.isEditStart === true ? data.dateOfStart.format("YYYY-MM-DD"):data.dateOfStart,
                    "dateOfEnd": data.isEditEnd === true ? data.dateOfEnd.format("YYYY-MM-DD"):data.dateOfEnd,
                    "amount": "3",
                    "details": data.details
                
                }    ]
        }
        try{
            const body = {
                prescriptionId:prescriptionId,
                object:object
            }
            const response = await method(body).unwrap()
            toast.success("تم تعديل الدواء بنجاح")
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
        <EditPrescriptionsStateContext.Provider value={contextValue}>
            {children}
        </EditPrescriptionsStateContext.Provider>
);
};

export default EditPrescriptionsState;

EditPrescriptionsState.propTypes = {
    children: PropTypes.node.isRequired,
};

// Custom hook to use the state
// eslint-disable-next-line react-refresh/only-export-components
export const useEditPrescriptionsState = () =>
    useContext(EditPrescriptionsStateContext);
