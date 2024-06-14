import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes
const EnterDisbursedMedicinesStateContext = createContext();

const EnterDisbursedMedicinesState = ({ children }) => {
const [state, setState] = useState(
    {
        epoetin:false,
        heparin:false,
        iron:false,
        needles:false,
        Bicarbonate:false,
        vascularEntrance:false,
        circuit:false,
        acid:false,
        filterType:false

    }
);

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

  return (
    <EnterDisbursedMedicinesStateContext.Provider value={contextValue}>
      {children}
    </EnterDisbursedMedicinesStateContext.Provider>
  );
};

export default EnterDisbursedMedicinesState;

EnterDisbursedMedicinesState.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom hook to use the state
// eslint-disable-next-line react-refresh/only-export-components
export const useEnterDisbursedMedicinesState = () =>
  useContext(EnterDisbursedMedicinesStateContext);
