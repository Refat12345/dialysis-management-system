// 

/* eslint-disable react/prop-types */
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function DropDown({ title, filter, colors, onSelect , type , manager }) {
  const [selectedValue, setSelectedValue] = useState(title);

  const color = `bg-${colors.titleColor} text-${colors.textColor} border-${colors.textColor}`;

  const handleItemClick = (value) => {
    setSelectedValue(value);
  };
  const handleReset = () => {
   if(manager !=undefined){
    setSelectedValue("المراكز الطبية");
    onSelect("المراكز الطبية")
   }else{
    setSelectedValue(title);
    onSelect(title);
   }
  };
  return (
    <Menu dir="rtl" as="div" className="relative inline-block w-full">
      <div>
        <Menu.Button
          className={`inline-flex justify-between w-[90%] rounded-full bg- px-3 py-1 text-sm font-primaryBold hover:bg-${colors.titleColor} border focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 ${color} transition-transform transform hover:scale-105`}
        >
          {selectedValue}
          <ChevronDownIcon
            className="h-5 w-5 text-textMenuColor font-primaryBold hover:text-violet-200"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-50 max-h-[250px] overflow-y-auto">
          <div className="px-1 py-1">
            {filter.map((content, index) => {
              return (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <button
                      onClick={() => {
                        
                        handleItemClick(content);
                        onSelect(content);
                      }}
                      className={`${
                        active
                          ? `bg-${colors.contentColor} text-white font-primaryRegular`
                          : "text-gray-900 font-primaryRegular"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {content}
                    </button>
                  )}
                </Menu.Item>
              );
            })}
            {(type != "shift") && <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleReset}
                  className={`${
                    active
                      ? `bg-${colors.contentColor} text-white font-primaryRegular`
                      : "text-gray-900 font-primaryRegular"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {"الكل"}
                </button>
              )}
            </Menu.Item>}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
