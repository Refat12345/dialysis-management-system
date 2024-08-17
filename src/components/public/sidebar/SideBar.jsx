/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { SideBarHeader, NavItem } from "../../index";
import "./style.css";

const SideBar = ({ sideBarData, totalOrdersCount }) => {
  const [activeItem, setActiveItem] = useState(sideBarData.items[0].name);

  useEffect(() => {
    const storedActiveItem = sessionStorage.getItem('sideBarActiveItem');
    if (storedActiveItem) {
      setActiveItem(storedActiveItem);
    } else {
      setActiveItem(sideBarData.items[0].name);
    }
  }, [sideBarData.items]);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    sessionStorage.setItem('sideBarActiveItem', itemName);
  };

  return (
    <>
      <aside
        className="fixed right-0 top-0 z-40 h-screen transition-transform -translate-x-full sm:translate-x-0 hidden md:block md:w-48"
        aria-label="Sidebar"
      >
        <div className="h-screen w-48 px-3 py-4 overflow-y-auto bg-white shadow-lg flex flex-col items-center ">
          <SideBarHeader header={sideBarData.header} />
          <ul className="space-y-2 font-medium mt-6 " dir="rtl">
            {sideBarData.items.map((admin, index) => (
              <NavItem
                key={index}
                href={admin.href}
                name={admin.name}
                icon={admin.icon}
                onClick={() => handleItemClick(admin.name)}
                isActive={activeItem === admin.name}
                totalOrdersCount={admin.name === "الطلبات" ? totalOrdersCount : null}
              />
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;

