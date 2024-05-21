/* eslint-disable react/prop-types */
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { bodyMeduimStyle, bodySmallStyle } from "../../../utils/StyleUtils";
import CheckMark from "../check/CheckMark";
import CustomButton from "../button/CustomButton";
import { XMarkIcon } from "@heroicons/react/24/solid";

const MultiSelectTextField = ({
  activeLabel = true,
  label,
  selectedValues = [],
  filter,
  onSelect,
  onRemove,
  showSelection = true,
}) => {
  return (
    <div className="w-full bg-bgDashboard">
      <Menu dir="rtl" as="div" className="relative inline-block w-full">
        <label className={`font-medium ${bodyMeduimStyle}`}>
          {!activeLabel ? "" : `${label}:`}
          <div className="h-1"></div>
          <Menu.Button
            className={`inline-flex justify-between w-full
          rounded-lg px-3 py-[7px] ${bodyMeduimStyle} hover:bg-gray-100 border-[1.8px] 
          focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75
            bg-white text-black border-gray-300 ${
              selectedValues.length === 0 ? "text-gray-400" : "text-black"
            } transition-all`}
          >
            {label}
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
          <Menu.Items className="absolute right-0 my-2 w-full origin-top-right z-10 rounded-lg bg-white shadow-lg ring-1 ring-black/5 focus:outline-none max-h-60 overflow-y-auto">
            <div className="px-1 py-1">
              {filter.map((content, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <button
                      onClick={() => onSelect(content)}
                      className={`${
                        active
                          ? `bg-gray-100 text-gray-900 font-primaryRegular`
                          : "text-gray-900 font-primaryRegular"
                      } ${bodyMeduimStyle} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <CheckMark checked={selectedValues.includes(content)} />
                      {content}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <div className="h-2"></div>
      {showSelection &&
        selectedValues.map((val, index) => (
          <CustomButton
            key={index}
            variant="solid"
            onClick={() => onRemove(val)}
            className={`bg-bgSecretaria text-primaryFontColor h-8 transition-all font-medium border-2 m-1 ${bodyMeduimStyle}`}
            title={
              <div className="flex items-center justify-center">
                <span className={`${bodySmallStyle}`}>{val}</span>
                <div className="lg:w-2 md:w-2 w-1"></div>
                <XMarkIcon className="w-5 h-5 mr-1 text-primaryFontColor" />
              </div>
            }
            radius="large"
          />
        ))}
    </div>
  );
};

export default MultiSelectTextField;
