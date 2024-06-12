import { Globalnotes } from "./../../../data/data";
import GlobalNotes from "../../../components/manager_center/globalNotes/GlobalNotes";
import { GeneralDetailsProvider } from "./GeneralNoteState";
import { useGeneralDetails } from "./GeneralNoteState";
import { useParams } from "react-router-dom";

export default function GeneralNotePage() {
  const { patientName } = useParams();
  // console.log("ID المريض هو:", patientName);

  const { generalDetails, isSuccess, isLoading } = useGeneralDetails();
  console.log("hi", generalDetails);
  return (
    <>
      { isSuccess && !isLoading && (
  <GeneralDetailsProvider userId={patientName}>
  <div dir="rtl">
    <span className="text-blue-500 text-lg">الملاحظات العامة</span>

    {generalDetails.notes.map((card, index) => {
      return(
        (
          <GlobalNotes key={index} note={card} />
        ))}
      )
    }
  </div>
</GeneralDetailsProvider>
      )
      
      }
    </>
  );
}
