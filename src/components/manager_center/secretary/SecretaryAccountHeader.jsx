import { SecretaryImage } from "../../../assets/index";
import { labelMediumStyle } from "../../../utils/StyleUtils";

const SecretaryAccountHeader = () => {
  return (//h-150
    <div className="w-full lg:h-[120px] md:h-32 h-24 bg-bgSecretaria px-3 flex flex-row justify-start items-center transition-all">
      <img
        className="lg:w-28 lg:h-28 w-20 h-20 transition-all"
        src={SecretaryImage}
        alt="Secretary Image"
      />
      <div className="lg:w-10 md:w-8 sm:w-6 w-4"></div>
      <div className="flex flex-col">
        <p
          className={`${labelMediumStyle} text-blue600 font-bold transition-all`}
        >
          إضافة سكرتاريا
        </p>
        <div className="lg:h-5 md:h-4 h-1 transition-all"></div>
        <p
          className={`${labelMediumStyle} text-primaryFontColor font-medium transition-all`}
        >
          من فضلك قم بإدخال المعلومات التالية:
        </p>
      </div>
    </div>
  );
};

export default SecretaryAccountHeader;
