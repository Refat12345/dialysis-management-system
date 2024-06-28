import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes
const OrdersStateContext = createContext();

const OrdersState = ({ children }) => {
    const [state, setState] = useState({
        request_id:"",
        causes:"",
        new_status:"",
        postData:(data)=>postData(data)
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
    const postData = (data)=>{
        console.log(data);
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
