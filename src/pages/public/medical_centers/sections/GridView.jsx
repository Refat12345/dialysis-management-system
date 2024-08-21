/* eslint-disable react/prop-types */
import { MedicalCenter, TransferPatient, AlertDialog } from "../../../../components/index";
import addressIcon from "../../../../assets/icons/public/address.svg";
import centerIcon from "../../../../assets/icons/public/MedicalCenterIcon.svg";
import { useSelector } from "react-redux";
import MedicalCenterDetails from "../../../../components/public/medical_centers/MedicalCenterDetails";

const GridView = ({ data }) => {

const icons = {
    centerIcon: centerIcon,
    addressIcon: addressIcon
};
    const height = window.innerHeight;
    const width = window.innerWidth;
    const responsive = height > 630 ? (height > 700 ? (width > 1410 ? "min-h-centerAbove700_1400" : "min-h-centerAbove700") : "min-h-centerUnder700") : "min-h-centerUnder630";
    const user = useSelector((state) => state.user);
    const title = ["العنوان", "معلومات التواصل", "تفاصيل عامة"];

return (
    <div className={`grid grid-cols-3 xl:grid-cols-4 content-start bg-bgSideButton shadow-inner rounded-lg p-4 gap-3 ${responsive}`}>
        {data.map((medicalCenter, index) => {
        return user.role === "admin" ? (
            <AlertDialog
                key={index}
                renderComponent={<MedicalCenter icons={icons} content={medicalCenter} role={"admin"} />}
                contentComponent={<TransferPatient destinationCenterID={medicalCenter.id} />}
            />
        ) : (
            <div key={index}>
            <AlertDialog
                contentComponent={
                <div className="w-[450px]">
                    <MedicalCenterDetails title={title} content={medicalCenter} />
                </div>
                }
                renderComponent={<MedicalCenter icons={icons} content={medicalCenter} role={"super"} id = {medicalCenter.id} />}
                titleButton={"رجوع"}
            />
            </div>
        );
    })}
    </div>
);
};

export default GridView;
