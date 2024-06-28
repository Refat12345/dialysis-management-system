/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import {ButtonLoader, Toast} from "../../../../components"
import { useEffect } from "react";
import { useOrdersState } from "../OrdersState";
import { useChangeStatusMutation } from "../../../../services/manager_center/orders/OrdersSlice";
const AcceptOrder = ({id}) => {
    
    const [changeStatus,{isLoading}] = useChangeStatusMutation()
    const {state , updateState} = useOrdersState()

    useEffect(()=>{
        updateState({request_id:id})
        updateState({new_status:"rejected"})
    },[])
    
    const handle = (event) => {
        event.stopPropagation();
        state.postData(state,changeStatus)
    }
    const textToastStyle = {color:"green", textAlign:"center" ,fontWeight:"bold", fontSize:"22px"};
return (
    <div dir="rtl" className="">
        
    </div> 
)
}

export default AcceptOrder