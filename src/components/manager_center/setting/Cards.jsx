/* eslint-disable no-unused-vars */
import patientCount from "./../../../assets/icons/medical-center/setting/patientCount.svg";
import doctorCount from "./../../../assets/icons/medical-center/setting/doctorCount.svg";
import chaiCount from "./../../../assets/icons/medical-center/setting/chaiCount.svg";
import { statisticMedicalInfo } from "../../../data/data";
import Cardd from "./Cardd";
const cardData = [
  {
    name: "اجمالي المرضى",
    icon: patientCount,
  },
  {
    name: "اجمالي الاطباء ",
    icon: doctorCount,
  },
  {
    name: "اجمالي الكراسي",
    icon: chaiCount,
  },
];
function Cards() {
  return (
    <div className="flex flex-row">
      <Cardd data={cardData[0]} statistic={statisticMedicalInfo.patientsCount}/>
      <Cardd data={cardData[1]} statistic={statisticMedicalInfo.chairCount} />
      <Cardd data={cardData[2]} statistic={statisticMedicalInfo.doctorCount} />
    </div>
  );
}

export default Cards;
