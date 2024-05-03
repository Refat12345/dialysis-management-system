import { Tab } from "@headlessui/react";
import { usePatientProfileState } from "../../../pages/manager_center/patient/patient_profile/PatientProfileState";

const PatientProfileNav = () => {
  const { state, updateState } = usePatientProfileState();

  const handleItemClick = (name) => {
    updateState({ activeItem: name });
  };

  return (
    <div className="py-7">
      <Tab.Group>
        <Tab.List className="flex flex-row-reverse bg-white rounded-2xl justify-end">
          {state.patientProfileMenuItems.map((item, index) => (
            <Tab
              key={item.name}
              className={` text-sm font-normal border-[1px] border-gray100 outline-none shadow-sm ${
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
                }  px-3 py-2 `}
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
