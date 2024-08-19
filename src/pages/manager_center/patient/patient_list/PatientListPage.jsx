/* eslint-disable react-hooks/exhaustive-deps */
import { PaginationComponent } from "../../../../components";
import { useState,useEffect ,useMemo } from "react";
import { Table } from "../../../../components/manager_center/patient/Patient";
import { usePatient } from "./PaitientListState";
import {PageLoader} from "../../../../components/index"
import PatientHeader from "../../../../components/manager_center/patient/PatientHeader";
const PatientListPage = () => {

  const { patientData, isLoading, isSuccess ,filteredDataSearch,setSearchTerm  } = usePatient();
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


  const itemsPerPage = useMemo(() => {
    const height = window.innerHeight;
    if (height > 800) return 10;
    if (height > 740) return 9;
    if (height > 700) return 8;
    if (height > 680) return 8;
    if (height > 620) return 7;
    return 6;
  }, [window.innerHeight]);

  
  if (isLoading) return <div className="flex-grow md:mr-48">
  <div className="flex items-center justify-center h-screen">
    <PageLoader />
  </div>
</div>;
  if (!patientData) return <div>No data available</div>;



  const flattenedData = patientData.flat();

  return (
    
    <>
    {isSuccess && !isLoading && flattenedData && (
      <div className="flex-grow mr-48">
        <div className="mx-[2%]">
        <PatientHeader type={"patient"}
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
            data={ filteredDataSearch.length ? filteredDataSearch.flat() :flattenedData}
            RenderComponent={Table}
            itemsPerPage={itemsPerPage}
          />
        )}
        </div>
      </div>
    )}
  </>
  );
};

export default PatientListPage;
