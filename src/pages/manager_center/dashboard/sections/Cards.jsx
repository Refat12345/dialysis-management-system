/* eslint-disable react/prop-types */
import { Card } from "../../../../components/index";
import PatientIcon from "../../../../assets/icons/medical-center/dashboard/Cards/icon.svg";
import SessionsIcon from "../../../../assets/icons/medical-center/dashboard/Cards/sessions_icon.svg";
import WaitingIcon from "../../../../assets/icons/medical-center/dashboard/Cards/waiting_icon.svg";
import { useGetStatisticsQuery } from "../../../../services/dashboard/DashboardSlice";

const cardData = [
  {
    name: "اجمالي المرضى",
    icon: PatientIcon,
  },
  {
    name: "اجمالي مرضى الانتظار",
    icon: WaitingIcon,
  },
  {
    name: "جلسات الغسيل",
    icon: SessionsIcon,
  },
  
];

const Cards = () => {
 const {data , isSuccess}= useGetStatisticsQuery();
  return (
isSuccess && <>
  <div className="flex flex-row-reverse h-[20%]">
    <Card  title={cardData[0]} statistic={data.patients}/>;
    <Card  title={cardData[1]} statistic={data.waitingList} />;
    <Card  title={cardData[2]} statistic={data.dialysisSessions} />;
  </div>
</>
  );
};

export default Cards;
