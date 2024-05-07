import PropTypes from "prop-types"; // Import PropTypes
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { GlobalInfoPatientAvatar } from "../../../../assets";

export const CardRow = ({ title, content }) => {
  return (
    <div className="flex flex-row-reverse justify-between my-1 px-3 py-1">
      <div className="text-base flex">:{title}</div>
      <div className="text-base font-bold">{content}</div>
      <div className="w-0"></div>
      <div className="w-0"></div>
    </div>
  );
};

export const InfoCard = ({ patientInfo }) => {
  return (
    <div className="flex flex-row-reverse">
      <div className="px-3 pt-4 pb-2">
        <img className="w-16" src={GlobalInfoPatientAvatar} alt="" />
      </div>
      <div className="flex flex-col items-end justify-start px-1 pt-5">
        <div className="font-bold text-lg mb-1">{patientInfo.name}</div>
        <div className="flex flex-row-reverse items-center justify-end">
          {patientInfo.status === "enable" ? (
            <CheckIcon className="text-green400 w-6 h-6" />
          ) : (
            <XMarkIcon className="text-red-600 w-6 h-6" />
          )}
          <span
            className={`${
              patientInfo.status === "enable" ? "text-green400" : "text-red-600"
            } mx-2`}
          >
            {patientInfo.status === "enable" ? "مفعّل" : "غير مفعّل"}
          </span>
        </div>
      </div>
    </div>
  );
};

export const CardHeader = ({ title, icon }) => (
  <div className="flex flex-row-reverse rounded-t-2xl items-center justify-between border-[#2E307D26] border-[1px] p-3 bg-blue400">
    <h2 className="md:text-base sm:text-sm font-semibold">{title}</h2>
    <img className="w-6" src={icon} alt="" />
  </div>
);

const GlobalInfoCard = ({ headerTitle, headerIcon, cardContent }) => {
  return (
    <div className="bg-cardColor shadow rounded-lg break-inside-avoid pb-2 mb-5">
      <CardHeader title={headerTitle} icon={headerIcon} />
      <div className="py-1">{cardContent}</div>
    </div>
  );
};

GlobalInfoCard.propTypes = {
  headerTitle: PropTypes.node.isRequired,
  headerIcon: PropTypes.node.isRequired,
  cardContent: PropTypes.node.isRequired,
};

CardHeader.propTypes = {
  title: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
};

CardRow.propTypes = {
  title: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
};

InfoCard.propTypes = {
  patientInfo: PropTypes.node.isRequired,
};

export default GlobalInfoCard;
