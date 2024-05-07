import { Tab } from "@headlessui/react";
import { usePatientProfileState } from "../../../pages/manager_center/patient/patient_profile/PatientProfileState";

const PatientProfileNav = () => {
  const { state, updateState } = usePatientProfileState();

  const handleItemClick = (name) => {
    updateState({ activeItem: name });
  };

  return (
    <div className="ml-5 h-52 rounded-2xl">
      <Tab.Group>
        <Tab.List className="flex flex-row-reverse bg-white rounded-2xl shadow-sm  pt-8">
          {state.patientProfileMenuItems.map((item, index) => (
            <Tab
              key={item.name}
              className={`${
                state.activeItem === item.name
                  ? "bg-bgTab text-white border-0 rounded-2xl"
                  : "text-primaryFontColor bg-white"
              } text-sm font-normal border-[1px] border-gray100 outline-none px-3 py-[6px] ${
                index === 0 ? "rounded-r-2xl" : ""
              } ${
                index === state.patientProfileMenuItems.length - 1
                  ? "rounded-l-2xl"
                  : ""
              }`}
              onClick={() => handleItemClick(item.name)}
            >
              {item.name}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
};

export default PatientProfileNav;
