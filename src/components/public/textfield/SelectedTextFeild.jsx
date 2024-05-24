/* eslint-disable react/prop-types */
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { bodyMeduimStyle } from "../../../utils/StyleUtils";

const SelectedTextFeild = ({
  activeLabel = true,
  label,
  value,
  filter,
  onSelect,
}) => {
  return (
    <Menu dir="rtl" as="div" className="relative inline-block w-full ">
      <label className={`font-medium ${bodyMeduimStyle}`}>
        {!activeLabel ? "" : `${label}:`}
        <div className="h-1"></div>
        <Menu.Button
          className={`inline-flex justify-between w-full 
          rounded-lg px-3 py-[7px] ${bodyMeduimStyle} hover:bg-gray-100 border-[1.8px] 
          focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75
            bg-white text-black border-gray-300 ${
              value === label ? "text-gray-400" : "text-black"
            } transition-all`}
        >
          {value}
          <ChevronDownIcon
            className="h-5 w-5 text-textMenuColor font-primaryBold hover:text-violet-200"
            aria-hidden="true"
          />
        </Menu.Button>
      </label>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black/5 focus:outline-none max-h-60 overflow-y-auto z-50">
          <div dir={`${label==="زمرة الدم"?"ltr":"rtl"}`} className="px-1 py-1">
            {filter.map((content, index) => {
              return (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <div
                      onClick={() => onSelect(content)}
                      className={`${
                        active
                          ? `bg-bgButtonColor text-white font-primaryRegular cursor-pointer`
                          : "text-gray-900 font-primaryRegular"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {content}
                    </div>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default SelectedTextFeild;
