/* eslint-disable react/prop-types */

import { labelMediumStyle } from "../../../utils/StyleUtils";

const PublicHeader = ({title, icon ,bool ,name}) => {

  const labelStyle = "text-base lg:text-lg"  
  const height = window.innerHeight;
  const responsiveHeight = height > 735 ?"lg:h-[110px]" : (height < 623 ? "lg:h-[80px]":"lg:h-[90px]")
  const responsiveImage = height > 735 ?"lg:w-20 lg:h-20":"lg:w-16 lg:h-16";

  return (
    <div className="w-full bg-bgSecretaria flex justify-between">
      <div className={` md:h-32 h-24  px-3 flex flex-row justify-start items-center transition-all ${bool !=undefined ?responsiveHeight :"lg:h-[150px]"}` }>
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
        <div className={`transition-all ${bool !=undefined ? "lg:h-[9px] md:h-[6px] h-[3px]":"lg:h-5 md:h-4 h-1"}`}></div>
        <p
          className={`${bool !=undefined ?labelStyle :labelMediumStyle} text-primaryFontColor font-medium transition-all`}
        >
          من فضلك قم بإدخال المعلومات التالية:
        </p>
      </div>
    </div>
    {name!=undefined && <div className={`${(title === "إضافة المعلومات العامة" || title === "إضافة وصفة طبية")&& "ml-4"} mt-11 font-bold flex `}>
    <p className="text-lg ml-2">المريض :</p>
    <p className=" text-titleColor text-lg">{name}</p>
    </div>}
    
    </div>
  );
};

export default PublicHeader;
