import GeneralDialysis from "../../../../components/manager_center/dialysis/dialysisInSidebar/GeneralDialysis";
import { PaginationComponent } from "../../../../components";
import { useGeneralDialysis } from "../../../../components/manager_center/dialysis/dialysisInSidebar/GeneralDialysisState";

function GeneralDialysisPage() {
  const { userData, isLoading, isSuccess } = useGeneralDialysis();
  if (isLoading || !userData || !userData.dialysisSessions) {
    return <div>جاري تحميل البيانات...</div>;
  }

  return (
    <>
      {isSuccess && !isLoading && userData && (
        <div className="flex-grow">
          <PaginationComponent
            data={userData.dialysisSessions}
            RenderComponent={GeneralDialysis}
            itemsPerPage={3}
          />
        </div>
      )}
    </>
  );
}

export default GeneralDialysisPage;
