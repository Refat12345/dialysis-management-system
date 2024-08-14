/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { SideBarHeader, NavItem } from "../../index";
import "./style.css"


const SideBar = ({ sideBarData, totalOrdersCount }) => {
  const [activeItem, setActiveItem] = useState(null);
  const [expandedItem, setExpandedItem] = useState(null);

  useEffect(() => {
    const storedActiveItem = sessionStorage.getItem('sideBarActiveItem');
    if (storedActiveItem) {
      setActiveItem(storedActiveItem);
    } else {
      setActiveItem(sideBarData.items[0].name);
    }
  }, [sideBarData.items]);

  const handleItemClick = (itemName, hasChildren) => {
    if (hasChildren) {
      setExpandedItem(expandedItem === itemName ? null : itemName);
      setActiveItem(itemName);
    } else {
      setActiveItem(itemName);
      setExpandedItem(null);
    }
    sessionStorage.setItem('sideBarActiveItem', itemName);
  };

  return (
    <>
      <aside
        className="fixed right-0 top-0 z-40 h-screen transition-transform -translate-x-full sm:translate-x-0 hidden md:block md:w-48"
        aria-label="Sidebar"
      >
        <div className="h-screen w-48 px-3 py-4 overflow-y-auto bg-white shadow-lg flex flex-col items-center">
          <SideBarHeader header={sideBarData.header} />
          <ul className="margin space-y-2 font-medium" dir="rtl">
            {sideBarData.items.map((item, index) => (
              <li key={index}>
                <NavItem
                  href={item.href}
                  name={item.name}
                  icon={item.icon}
                  onClick={() => handleItemClick(item.name, !!item.children)}
                  isActive={activeItem === item.name}
                  totalOrdersCount={item.name === "الطلبات" ? totalOrdersCount : null}
                />
                {item.children && expandedItem === item.name && (
                  <ul className="pl-4 mt-2 space-y-2">
                    {item.children.map((child, childIndex) => (
                      
                      <div key={childIndex}>
                        <NavItem
                          href={child.href}
                          name={child.name}
                          icon={child.icon}
                          onClick={() => {
                            setActiveItem(child.name);
                            sessionStorage.setItem('sideBarActiveItem', child.name);
                          }}
                          isActive={activeItem === child.name}
                        />
                      </div>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
