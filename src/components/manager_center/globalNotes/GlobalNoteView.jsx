/* eslint-disable react/prop-types */
import { useGeneralDetails } from "../../../pages/manager_center/generalNotes/GeneralNoteState";
import {  PublicLoader } from "../../../components/index";
import GlobalNotes from "./GlobalNotes";

function GlobalNoteView({ type }) {
  const { generalDetails, isSuccess, isLoading } = useGeneralDetails();

  if (isLoading)
    return (
      <PublicLoader/>
    );

  if (!generalDetails.length) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <strong className="text-gray-500 text-lg">
          لا يوجد ملاحظات عامة موجهة لك
        </strong>
      </div>
    );
  }
  return (
    <>
      {isSuccess && !isLoading && (
        <>
          <div dir="rtl" className="relative mt-2">
          <span className="text-titleSideColor text-2xl font-primaryBold ">
            الملاحظات
          </span>
            {generalDetails.map((card, index) => {
              return <GlobalNotes key={index} note={card} type={type} />;
            })}
          </div>
        </>
      )}
    </>
  );
}

export default GlobalNoteView;
