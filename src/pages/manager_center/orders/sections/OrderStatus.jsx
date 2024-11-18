/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import {ButtonLoader, TextArea } from "../../../../components"
import { useEffect , useState} from "react";
import { useOrdersState } from "../OrdersState";
import { useChangeStatusMutation } from "../../../../services/manager_center/orders/OrdersSlice";
import { ToastContainer } from "react-toastify";
const OrdersStatus = ({id , type ,setOpen}) => {
    
    const [changeStatus,{isLoading}] = useChangeStatusMutation()
    const {state , updateState} = useOrdersState()
    const [userInput, setUserInput] = useState('');

    useEffect(() => {
        updateState({request_id:id})
        if ( type === "rejected") { updateState({new_status: "rejected"} )}
        else { updateState({new_status:"approved"}) }
    },[])

    const handleUserInput = (event) => {
        setUserInput(event.target.value);
    };

    const handle = (event) => {
        event.stopPropagation();
        state.postData(state,changeStatus,type ,setOpen)
    }

return (
    <div dir="rtl">
            <ToastContainer position="top-right"/>
            <p className=" flex justify-center text-lg text-titleColor font-primaryBold mb-2 ">{type === "rejected" ? "هل أنت متأكد من رفض الطلب ؟":"هل أنت متأكد من قبول الطلب ؟"}</p>
            <TextArea value={userInput} onChange={handleUserInput} label={"سبب الرفض"}/>
            <div className='flex flex-row justify-center'>
                <button  onClick={()=>setOpen(false)} className={`${type === "rejected" ? "bg-red-500" : " bg-green-500"} mt-4 font-primaryBold text-white hover:bg-bgSideButton hover:text-titleSideColor py-1 px-3 rounded-lg ml-3 `}
                > {"رجوع"}
                </button>
                { !isLoading ? <button  onClick={handle} className={`${type === "rejected" ? "bg-red-500" : " bg-green-500"} mt-4 font-primaryBold text-white hover:bg-bgSideButton hover:text-titleSideColor py-1 px-3 rounded-lg `}
                > {"تأكيد"}
                </button>:<ButtonLoader/> }
                
            </div>
    </div> 
)
}

export default OrdersStatus