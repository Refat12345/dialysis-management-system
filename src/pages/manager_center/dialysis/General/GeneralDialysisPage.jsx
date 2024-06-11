import GeneralDialysis from "../../../../components/manager_center/dialysis/dialysisInSidebar/GeneralDialysis";
import { PaginationComponent } from "../../../../components";
import { useGeneralDialysis } from "../../../../components/manager_center/dialysis/dialysisInSidebar/GeneralDialysisState";
import PatientHeader from "../../../../components/manager_center/patient/PatientHeader";
import {useState,useEffect} from "react"

function GeneralDialysisPage() {
  const { userData, isLoading, isSuccess,setSearchTerm, filteredDataSearch } = useGeneralDialysis();
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
  if (isLoading || !userData || !userData.dialysisSessions) {
    return <div>جاري تحميل البيانات...</div>;
  }

  // return (
  //   <>
  //     {isSuccess && !isLoading && userData && (
  //       <div className="flex-grow">
  //         <PatientHeader type={"dialysis"} setSearchTerm={}  />
  //         <PaginationComponent
  //           data={userData.dialysisSessions}
  //           RenderComponent={GeneralDialysis}
  //           itemsPerPage={3}
  //         />
  //       </div>
  //     )}
  //   </>

  return(
  <>
  {isSuccess && !isLoading  && (
    <div className="flex-grow ">
      <PatientHeader type={"dialysis"}
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
          data={ filteredDataSearch.length ? filteredDataSearch :userData.dialysisSessions}
          RenderComponent={GeneralDialysis}
          itemsPerPage={4}
        />
      )}
    </div>
  )}
</>
  );
}

export default GeneralDialysisPage;
