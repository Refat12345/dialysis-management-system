/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import {ButtonLoader } from "../../../../components"
import { useEffect } from "react";
import { useOrdersState } from "../OrdersState";
import { useChangeStatusMutation } from "../../../../services/manager_center/orders/OrdersSlice";
const OrdersStatus = ({id , type}) => {
    
    const [changeStatus,{isLoading}] = useChangeStatusMutation()
    const {state , updateState} = useOrdersState()

    useEffect(() => {
        updateState({request_id:id})
        if ( type === "rejected") { updateState({new_status: "rejected"} )}
        else { updateState({new_status:"approved"}) }
    },[])

    const handle = (event) => {
        event.stopPropagation();
        state.postData(state,changeStatus,type)
    }

return (
    <div dir="rtl">
            <p className=" flex justify-center text-lg text-titleColor font-primaryBold ">{type === "rejected" ? "هل أنت متأكد من رفض الطلب":"هل أنت متأكد من قبول الطلب"}</p>
            <div className='flex flex-row justify-center'>
                { !isLoading ? <button  onClick={handle} className={`${type === "rejected" ? "bg-red-500" : " bg-green-500"} my-4 font-primaryBold text-white hover:bg-bgSideButton hover:text-titleSideColor py-1 px-3 rounded-lg `}
                > {"تأكيد"}
                </button>:<ButtonLoader/> }
            </div>
    </div> 
)
}

export default OrdersStatus