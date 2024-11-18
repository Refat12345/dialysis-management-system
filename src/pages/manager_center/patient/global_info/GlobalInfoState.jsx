import { createContext } from "react";
import PropTypes from "prop-types";
import { useGetGeneralDetailsQuery } from "../../../../services/manager_center/patient/global_info/GlobalInfoSlice";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import {  PublicLoader } from "../../../../components";

export const GlobalInfoStateContext = createContext();

const GlobalInfoState = ({ children }) => {
  const { patientName } = useParams();
  const id = useMemo(() => patientName, [patientName]);

  const { data, error, isLoading } = useGetGeneralDetailsQuery(id);


  if (isLoading) {
    return (
      <PublicLoader/>
    );
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  const contextValue = {
    state: data, // Assuming the data structure from your API
  };

  return (
    <GlobalInfoStateContext.Provider value={contextValue}>
      {children}
    </GlobalInfoStateContext.Provider>
  );
};

GlobalInfoState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalInfoState;
