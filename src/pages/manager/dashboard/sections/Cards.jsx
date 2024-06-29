/* eslint-disable react/prop-types */
import { Card } from "../../../../components/index";
import { waitingDashIcon , patientDashIcon , dialysisDashIcon , secretaryDashIcon , doctorDashIcon , nurseDashIcon } from "../../../../assets";


const cardData = [
    {
    name: "اجمالي المرضى",
    icon: patientDashIcon,
    },
    {
    name: "اجمالي الأطباء",
    icon: doctorDashIcon,
    },
    {
    name: "اجمالي الممرضين",
    icon: nurseDashIcon,
    },
    {
    name: "اجمالي السكرتارية",
    icon: secretaryDashIcon,
    },
    {
    name: "اجمالي مرضى الانتظار",
    icon: waitingDashIcon,
    },
    {
        name: "اجمالي جلسات الغسيل",
        icon: dialysisDashIcon,
    }

];

const Cards = ({data}) => {

    const height = window.innerHeight;
    return (
        <>
            <div dir="rtl"  className={`grid grid-cols-4   ${height > 700 ? "h-[42%]":"h-[39.5%]"}`}>
                <Card  title={cardData[0]} statistic={data.patients} type={"manager"} index = {"0"}/>
                <Card  title={cardData[1]} statistic={data.doctors} type={"manager"} index = {"1"}/>
                <Card  title={cardData[2]} statistic={data.nurses} type={"manager"} index = {"2"}/>
                <Card  title={cardData[3]} statistic={data.secretaries} type={"manager"} index = {"3"}/>
                <Card  title={cardData[4]} statistic={data.waitingList} type={"manager"} index = {"4"}/>
                <Card  title={cardData[5]} statistic={data.dialysisSessions} type={"manager"} index = {"5"}/>
            </div>
</>
);
};

export default Cards;
