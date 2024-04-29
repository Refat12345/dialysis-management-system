/* eslint-disable react/prop-types */
import { useState } from "react";

import { SideBarHeader , NavItem } from "../../components/index";
const SideBar = ({sideBarData}) => {
    const [activeItem, setActiveItem] = useState(sideBarData.items[0].name);

    const handleItemClick = (itemName) => {
      setActiveItem(itemName);
    };
    return (
      <>
        <aside
          className="fixed top-0 right-0 z-40 w-59 h-screen transition-transform -translate-x-full sm:translate-x-0 sm:ml-4 md:ml-8 lg:ml-[20px] hidden md:block"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-white shadow-lg dark:bg-gray-800 flex flex-col items-center ">
            <SideBarHeader header={sideBarData.header}/>
            <ul className="space-y-2 font-medium mt-8 " dir="rtl">
            {sideBarData.items.map(admin=>{
                return <>
                    <NavItem
                          name={admin.name}
                          icon={admin.icon}
                          onClick={()=>handleItemClick(admin.name)}
                          isActive={activeItem=== admin.name}
                    />
                </>
              })}
            </ul>
          </div>
        </aside>
      </>
    );
}

export default SideBar