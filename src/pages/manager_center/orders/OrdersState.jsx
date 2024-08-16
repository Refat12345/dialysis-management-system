import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types"; // Import PropTypes
const OrdersStateContext = createContext();

const OrdersState = ({ children }) => {
    const [state, setState] = useState({
        request_id:"",
        causes:"",
        new_status:"",
        postData:(data,changeStatus,type)=>postData(data,changeStatus,type)
    });

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
    const postData = async(data,changeStatus,type)=>{
        const body = {
            request_id:data.request_id,
            new_status:data.new_status  
        }
        try {
            const response =await changeStatus(body)
            console.log(response);
            
            if(type === "rejected") {
                toast.error("تم رفض الطلب بنجاح")
            } else {
                toast.success("تم قبول الطلب بنجاح")
            }
        }catch(err){console.log(err);}
    }
return (
    <OrdersStateContext.Provider value={contextValue}>
        {children}
    </OrdersStateContext.Provider>
);
};

export default OrdersState;

OrdersState.propTypes = {
    children: PropTypes.node.isRequired,
};

// Custom hook to use the state
// eslint-disable-next-line react-refresh/only-export-components
export const useOrdersState = () =>
    useContext(OrdersStateContext);
