import { Card } from "../../../../components/index";
import PatientIcon from "../../../../assets/icons/medical-center/dashboard/Cards/icon.svg";
import SessionsIcon from "../../../../assets/icons/medical-center/dashboard/Cards/sessions_icon.svg";
import WaitingIcon from "../../../../assets/icons/medical-center/dashboard/Cards/waiting_icon.svg";

const cardData = [
  {
    name: "اجمالي المرضى",
    count: "1.5K",
    icon: PatientIcon,
  },
  {
    name: "جلسات الغسيل",
    count: "500",
    icon: SessionsIcon,
  },
  {
    name: "اجمالي مرضى الانتظار",
    count: "350",
    icon: WaitingIcon,
  },
];

const Cards = () => {
  return (
    <>
      <div className="flex flex-row-reverse">
        {cardData.map((data) => {
          return (
            <>
              <Card data={data} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
