import { Tab } from "@headlessui/react";
import { usePatientProfileState } from "../../../pages/manager_center/patient/patient_profile/PatientProfileState";
import { bodySmallStyle } from "../../../utils/StyleUtils";

const PatientProfileNav = () => {
  const { state, updateState } = usePatientProfileState();
  const handleItemClick = (name) => {
    updateState({ activeItem: name });
    state.selectScreen(name);
  };

  return (
    <div className="py-7">
      <Tab.Group>
        <Tab.List
          dir="rtl"
          className="flex flex-row bg-white rounded-2xl justify-end"
        >
          {state.patientProfileMenuItems.map((item, index) => (
            <Tab
              key={item.name}
              className={` ${bodySmallStyle} font-normal border-[1px] border-gray100 outline-none shadow-sm ${
                index === 0 ? "rounded-r-2xl" : ""
              } ${
                index === state.patientProfileMenuItems.length - 1
                  ? "rounded-l-2xl"
                  : ""
              }`}
              onClick={() => handleItemClick(item.name)}
            >
              <div
                className={`${
                  state.activeItem === item.name
                    ? "bg-bgTab text-white rounded-2xl"
                    : "text-primaryFontColor"
                }  md:px-3 sm:px-1 px-1 lg:py-2 md:py-2 py-1 `}
              >
                {item.name}
              </div>
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
};

export default PatientProfileNav;
