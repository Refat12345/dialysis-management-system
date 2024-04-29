/* eslint-disable react/prop-types */

import Icon from "../../../assets/icons/medical-center/dashboard/Sessions/patient.svg";

const DialysisSession = ({ dialysis }) => {
  return (
    <>
      <div className="flex justify-between flex-row-reverse bg-white rounded-md m-4">
        <div dir="rtl" className="flex">
          <img src={Icon} alt="" />
          <p className="text-gray-600 text-xs font-medium text mt-2 mb-2 mr-4">
            {dialysis.patientName}
          </p>
        </div>
        <p className="text-gray-600 text-xs font-medium text mt-2 mb-2">
          {dialysis.nurseName}
        </p>
        <p className="text-gray-600 text-xs font-medium text mt-2 mb-2">
          {dialysis.startTime}
        </p>
        <p className="text-gray-600 text-xs font-medium text mt-2 mb-2">
          {dialysis.endTime}
        </p>
        <p className="text-gray-600 text-xs font-medium text mt-2 mb-2 hidden sm:block">
          {dialysis.chair}
        </p>
        <p className="text-gray-600 text-xs font-medium mt-2 mb-2  hidden sm:block">
          {dialysis.hall}
        </p>
      </div>
    </>
  );
};

export default DialysisSession;
