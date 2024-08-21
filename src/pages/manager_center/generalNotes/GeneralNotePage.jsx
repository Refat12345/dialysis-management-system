/* eslint-disable react/prop-types */
import GlobalNoteView from "../../../components/manager_center/globalNotes/GlobalNoteView";
import { GeneralDetailsProvider } from "./GeneralNoteState";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import SendNote from "../../../components/manager_center/globalNotes/SendNote";

export default function GeneralNotePage({ type }) {
  const { patientName } = useParams();
  const [open, setOpen] = useState(false);

  const user = useSelector((state) => state.user);

  let id;

  if (type === "sidebar") id = user.id;
  else id = patientName;

  return (
    <>
      <GeneralDetailsProvider userId={id}>
        {type === "sidebar" ? (
          <div className="flex-grow mr-56 ml-8 mt-8" dir="rtl">
            <span className="text-titleColor font-bold text-xl mt-2 ">
              الملاحظات العامة
            </span>
            {type === "sidebar" && (
              <button
                onClick={() => setOpen(true)}
                className=" mt-2 h-8 w-28 absolute left-7  text-white bg-titleColor hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center"
              >
                ارسال ملاحظة
              </button>
            )}
            <GlobalNoteView type={type} />
            <SendNote open={open} setOpen={setOpen} />
          </div>
        ) : (
          <GlobalNoteView type={type} />
        )}
      </GeneralDetailsProvider>
    </>
  );
}
