import GlobalNoteView from "../../../components/manager_center/globalNotes/GlobalNoteView";
import { GeneralDetailsProvider } from "./GeneralNoteState";
import { useParams } from "react-router-dom";

export default function GeneralNotePage() {
  const { patientName } = useParams();

  return (
    <GeneralDetailsProvider userId={patientName}>
      <GlobalNoteView />
    </GeneralDetailsProvider>
  );
}
