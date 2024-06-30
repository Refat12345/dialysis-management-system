import { createContext } from "react";
import PropTypes from "prop-types";
import { useGetGeneralDetailsQuery } from "../../../../services/manager_center/patient/global_info/GlobalInfoSlice";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { PageLoader } from "../../../../components";

export const GlobalInfoStateContext = createContext();

const GlobalInfoState = ({ children }) => {
  const { patientName } = useParams();
  const id = useMemo(() => patientName, [patientName]);

  const { data, error, isLoading } = useGetGeneralDetailsQuery(id);

  if (isLoading) {
    return (
      <div className="flex-grow md:mr-48">
        <div className="flex items-center justify-center h-screen">
          <PageLoader />
        </div>
      </div>
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
