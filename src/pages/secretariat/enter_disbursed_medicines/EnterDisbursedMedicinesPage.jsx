import { PublicHeader } from "../../../components"
import DialysisIcon from "../../../assets/icons/public/record_svgrepo.com.svg"
const EnterDisbursedMedicines = () => {
  return (
    <div dir="rtl" className="flex-grow md:mr-48 bg-bgMedicalRecord">
        <div className="mx-[2%]">
          <PublicHeader title={"لوازم جلسة الغسيل"} icon={DialysisIcon}/>
        </div>
    </div>
  )
}

export default EnterDisbursedMedicines