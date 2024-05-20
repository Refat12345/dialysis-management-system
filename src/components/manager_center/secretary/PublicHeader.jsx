/* eslint-disable react/prop-types */

import { labelMediumStyle } from "../../../utils/StyleUtils";

const PublicHeader = ({title, icon ,bool}) => {
  let responsiveImage = "lg:w-24 lg:h-24";
  let labelStyle = "text-base lg:text-lg"  
  return (
    <div className="w-full lg:h-[150px] md:h-32 h-24 bg-bgSecretaria px-3 flex flex-row justify-start items-center transition-all">
      <img
        className={`w-20 h-20 transition-all ${bool !=undefined ? responsiveImage :"lg:w-28 lg:h-28 "}`}
        src={icon}
        alt="Secretary Image"
      />
      <div className="lg:w-10 md:w-8 sm:w-6 w-4"></div>
      <div className="flex flex-col">
        <p
          className={`${labelMediumStyle} text-blue600 font-primaryBold transition-all`}
        >
          {title}
        </p>
        <div className={`transition-all ${bool !=undefined ? "lg:h-3 md:h-2 h-1":"lg:h-5 md:h-4 h-1"}`}></div>
        <p
          className={`${bool !=undefined ?labelStyle :labelMediumStyle} text-primaryFontColor font-medium transition-all`}
        >
          من فضلك قم بإدخال المعلومات التالية:
        </p>
      </div>
    </div>
  );
};

export default PublicHeader;
