/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import GeneralDialysis from "../../../../components/manager_center/dialysis/dialysisInSidebar/GeneralDialysis";
import { PaginationComponent , PublicLoader} from "../../../../components";
import { useGeneralDialysis } from "../../../../components/manager_center/dialysis/dialysisInSidebar/GeneralDialysisState";
import PatientHeader from "../../../../components/manager_center/patient/PatientHeader";
import { useState, useEffect,useMemo } from "react";
import { useParams } from "react-router-dom";
function GeneralDialysisPage({ type }) {
  const { patientName } = useParams();
  useEffect(() => {
    localStorage.setItem('patientName', patientName);
  }, [patientName]);

  
  const itemsPerPage = useMemo(() => {
    const height = window.innerHeight;
    if (height > 800) return 10;
    if (height > 740) return 9;
    if (height > 670) return 8;
    if (height > 630) return 7;
    return 6;
  }, [window.innerHeight]);

  const {
    userData,
    isLoading,
    isSuccess,
    setSearchTerm,
    filteredDataSearch,
    userByPatient,
    isLoadingByPatient,
    isSuccessByPatient,
  } = useGeneralDialysis();
  const [searchTerm, setSearchTermState] = useState("");
  const [noResultsFound, setNoResultsFound] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      if (filteredDataSearch.length) {
        setNoResultsFound(false);
      } else {
        setNoResultsFound(true);
      }
    } else {
      setNoResultsFound(false);
    }
  }, [searchTerm, filteredDataSearch]);
  
  if (isLoading) 
  return <PublicLoader/>


  return (
    <>
      {type === "general"
        ? isSuccess &&
          !isLoading && (
            <div className="flex-grow ">
              <PatientHeader
                type={"dialysis"}
                setSearchTerm={(term) => {
                  setSearchTermState(term);
                  setSearchTerm(term);
                }}
              />
              {noResultsFound ? (
                <div
                  className="no-results-message"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <p>لم نعثر على أي نتائج مطابقة لبحثك.</p>
                    <p>جرب كلمات مفتاحية مختلفة أو قم بتوسيع نطاق البحث.</p>
                  </div>
                </div>
              ) : (
                <PaginationComponent
                  data={
                    filteredDataSearch.length
                      ? filteredDataSearch
                      : userData.dialysisSessions
                  }
                  type2={"dialysis"}
                  RenderComponent={GeneralDialysis}
                  itemsPerPage={itemsPerPage}
                />
              )}
            </div>
          )

        : 
       
          isSuccessByPatient &&
          !isLoadingByPatient && (
            <div className="flex-grow -mt-8">
              <PaginationComponent
                data={userByPatient.dialysisSessions}
                RenderComponent={GeneralDialysis}
                itemsPerPage={itemsPerPage}
              />
            </div>
          )}
        
       
    </>
  );
}

export default GeneralDialysisPage;
