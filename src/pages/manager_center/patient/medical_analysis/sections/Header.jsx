/* eslint-disable react/prop-types */

import { DropDown } from "../../../../../components";

const Header = ({value,setFilters , analysisTypes}) => {
  const array = []
  for (let index = 0; index < analysisTypes.length; index++) {
    array.push(analysisTypes[index].analysisName)
    
  }
  const filters = [
    {
      title: " الربع",
      array: ["الربع الأول", "الربع الثاني", "الربع الثالث", "الربع الرابع"],
    },
    {
      title: "نوع التحليل",
      array: array,
    },
    {
      title: "الشهر",
      array:  [
        "كانون الثاني","شباط","آذار","نيسان","أيار",
        "حزيران","تموز","آب","أيلول","تشرين الأول",
        "تشرين الثاني","كانون الأول"
      ],
    },
  ];
  const colors = {
    titleColor: "bgSideButton",
    contentColor: "bgButtonColor",
    textColor: "textMenuColor",
  };

  return (
    <div className="header flex justify-between mb-6  ">
      <span className="text-titleSideColor text-2xl font-primaryBold ">
        التحاليل
      </span>
      <div className="flex justify-between w-[55%]">
        {filters.map((filter, index) => {
          return (
            <DropDown
              key={index}
              filter={filter.array}
              title={filter.title}
              colors={colors}
              onSelect={(val) => {
              index === 0 ? setFilters({...value,quarter:val}) : (index === 1 ? setFilters({...value,type:val}) : setFilters({...value,date:val}))
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Header;
