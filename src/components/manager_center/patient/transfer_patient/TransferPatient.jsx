/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import TextArea from "../../../public/text_area/TextArea"
import { useState } from "react";
import { useTransferPatientMutation } from "../../../../services/manager_center/patient/patient_trasfer/PatientTransferSlice";
import { toast, ToastContainer } from "react-toastify";
import ButtonLoader from "../../../public/loader/ButtonLoader";
import { useParams } from "react-router-dom";

const TransferPatient = ({destinationCenterID}) => {
    let { patientName } = useParams();
    const [userInput, setUserInput] = useState('');
    const [input,setInput] = useState(false);
    const [transferPatient,{isLoading  }] = useTransferPatientMutation()
    const user = useSelector((state)=>state.user) 
    const handleUserInput = (event) => {
        setUserInput(event.target.value);
    };
    const postData = async() => {

        if(userInput === "") {
            setInput(true)
            return;
        }
        try{
            const body = {
                centerPatientID:user.centerID,
                cause:userInput,
                destinationCenterID:destinationCenterID,
                patientID:patientName
            }
            await transferPatient(body).unwrap()
            toast.success("طلبك قيد المعالجة")

        }catch(err)
        {
        toast.error(err.data.error)
            
        }
    }
return (
    <div dir="rtl">
        <div>
            <ToastContainer  position="top-right"/>
            <p className="text-lg text-titleSideColor font-primaryBold mb-4">سبب نقل المريض الى مركز اخر</p>
            <TextArea value={userInput} onChange={handleUserInput} label={"السبب"} />
            {input === true && (
            <div dir="rtl" className="text-red-500 text-sm mt-1">
            {"يرجى إدخال السبب"}
            </div>
        )}
            <div className='flex flex-row justify-center'>
                {!isLoading ? <button onClick = {postData} className='my-4 font-primaryBold bg-bgButtonColor text-white hover:bg-bgSideButton hover:text-titleSideColor py-1 px-3 rounded-lg '
                > {"تأكيد"}
                </button>:
                <ButtonLoader/>}
            </div>
        </div> 
    </div> 
)
}

export default TransferPatient