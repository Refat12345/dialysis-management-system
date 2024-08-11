/* eslint-disable react/prop-types */
import GlobalNoteView from "../../../components/manager_center/globalNotes/GlobalNoteView";
import { GeneralDetailsProvider } from "./GeneralNoteState";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function GeneralNotePage({ type }) {
  const { patientName } = useParams();
  const user = useSelector((state) => state.user);

  let id;

  if (type === "sidebar") id = user.id;
  else id = patientName;

  return (
    <>
      <GeneralDetailsProvider userId={id}>
        {type === "sidebar" ? (
          <div className="flex-grow mr-56 ml-8">
            <GlobalNoteView type={type} />
          </div>
        ) : (
          <GlobalNoteView type={type} />
        )}
      </GeneralDetailsProvider>
    </>
  );
}
