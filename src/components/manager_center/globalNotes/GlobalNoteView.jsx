/* eslint-disable react/prop-types */
import { useGeneralDetails } from "../../../pages/manager_center/generalNotes/GeneralNoteState";
import { PageLoader } from "../../../components/index";
import GlobalNotes from "./GlobalNotes";
import { useState } from "react";
import SendNote from "./SendNote";
function GlobalNoteView({ type }) {
  const { generalDetails, isSuccess, isLoading } = useGeneralDetails();

  const [open, setOpen] = useState(false);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <PageLoader />
      </div>
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
      {isSuccess && !isLoading && generalDetails && (
        <>
          <div dir="rtl" className="relative mt-2">
            <span className="text-blue-500 text-lg ">الملاحظات العامة</span>
            {type === "sidebar" && (
              <button
                onClick={() => setOpen(true)}
                className=" absolute left-0 text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center"
              >
                ارسال ملاحظة
              </button>
            )}
            {generalDetails.map((card, index) => {
              return <GlobalNotes key={index} note={card} type={type} />;
            })}
            <SendNote open={open} setOpen={setOpen} />
          </div>
        </>
      )}
    </>
  );
}

export default GlobalNoteView;
