/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import {ButtonLoader, TextArea , Toast} from "../../../../components"
import { useEffect, useState } from "react";
import { useOrdersState } from "../OrdersState";
import { useChangeStatusMutation } from "../../../../services/manager_center/orders/OrdersSlice";
const RejectOrder = ({id}) => {
    
    const [changeStatus,{isLoading}] = useChangeStatusMutation()
    const {state , updateState} = useOrdersState()
    const [userInput, setUserInput] = useState(''); 
    const handleUserInput = (event) => {
        setUserInput(event.target.value);
        updateState({causes:event.target.value})
    };

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
    <div dir="rtl">
        <form>
            <p className="text-lg text-titleColor font-primaryBold mb-4">سبب الرفض</p>
            <TextArea value={userInput} onChange={handleUserInput} label={"السبب"} />
            <div className='flex flex-row justify-center'>
                {!isLoading ? <button type="submit" onClick={handle} className='my-4 font-primaryBold bg-red-500 text-white hover:bg-bgSideButton hover:text-titleSideColor py-1 px-3 rounded-lg '
                > {"تأكيد"}
                </button>:<ButtonLoader/>}
            </div>
            <Toast progressColor={"red"} textStyle={textToastStyle}/>
        </form> 
    </div> 
)
}

export default RejectOrder