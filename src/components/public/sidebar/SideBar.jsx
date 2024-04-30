/* eslint-disable react/prop-types */
import { useState } from "react";

import { SideBarHeader, NavItem } from "../../index";

const SideBar = ({ sideBarData }) => {
  const [activeItem, setActiveItem] = useState(sideBarData.items[0].name);

  const handleItemClick = (itemName) => {
    console.log("Clicked");
    setActiveItem(itemName);
  };
  return (
    <>
      <aside
          className="z-40 h-screen transition-transform -translate-x-full sm:translate-x-0 hidden md:block md:w-48"
          aria-label="Sidebar"
      >
        <div className="h-screen w-48 px-3 py-4 overflow-y-auto bg-white shadow-lg flex flex-col items-center ">
          <SideBarHeader header={sideBarData.header} />
          <ul className="space-y-2 font-medium mt-8 " dir="rtl">
            {sideBarData.items.map((admin, index) => {
              return (
                <NavItem
                  key={index}
                  href={admin.href}
                  name={admin.name}
                  icon={admin.icon}
                  onClick={() => handleItemClick(admin.name)}
                  isActive={activeItem === admin.name}
                />
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
