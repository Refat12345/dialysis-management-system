import { useGeneralDetails } from "../../../pages/manager_center/generalNotes/GeneralNoteState";
import LoadingComponent from "../../public/LoadingComponent ";
import GlobalNotes from "./GlobalNotes";
function GlobalNoteView() {
  const { generalDetails, isSuccess, isLoading } = useGeneralDetails();

  if (isLoading) return <LoadingComponent />;
  if (!generalDetails.length) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
        <strong className="text-gray-500 text-lg">لا يوجد ملاحظات عامة لهذا المريض</strong>
      </div>
    );
  }
  return (
    <>
      {isSuccess && !isLoading && generalDetails && (
        <>
          <div dir="rtl">
            <span className="text-blue-500 text-lg">الملاحظات العامة</span>

            {generalDetails.map((card, index) => {
              return <GlobalNotes key={index} note={card} />;
            })}
          </div>
        </>
      )}
    </>
  );
}

export default GlobalNoteView;
