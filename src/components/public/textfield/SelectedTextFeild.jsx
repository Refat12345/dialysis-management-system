/* eslint-disable react/prop-types */
import { Menu, Transition, Dialog } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { bodyMeduimStyle } from "../../../utils/StyleUtils";

const SelectedTextFeild = ({
  activeLabel = true,
  label,
  value,
  filter,
  onSelect,
  allowNewSelection = false,
  type,
  placeholder,
  onClick,
  type2,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newType, setNewType] = useState("");

  const handleAddNewType = () => {
    if (newType) {
      onSelect(newType);
      setIsDialogOpen(false);
      setNewType("");
    }
  };

  return (
    <div>
      <Menu
        dir="rtl"
        as="div"
        className={`relative inline-block ${
          type2 === "superAdmin" ? "w-64" : "w-full"
        }`}
      >
        {" "}
        <label onClick={onClick} className={`font-medium ${bodyMeduimStyle}`}>
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
            <div
              dir={`${label === "زمرة الدم" ? "ltr" : "rtl"}`}
              className="px-1 py-1"
            >
              {filter.map((content, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <div
                      onClick={(event) => {
                        event.stopPropagation();
                        onSelect(content);
                      }}
                      className={`${
                        active
                          ? "bg-bgButtonColor text-white font-primaryRegular cursor-pointer"
                          : "text-gray-900 font-primaryRegular"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {content}
                    </div>
                  )}
                </Menu.Item>
              ))}
              {allowNewSelection && (
                <Menu.Item>
                  {({ active }) => (
                    <div
                      onClick={() => setIsDialogOpen(true)}
                      className={`${
                        active
                          ? "bg-bgButtonColor text-white font-primaryRegular cursor-pointer"
                          : "text-gray-900 font-primaryRegular"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {type}
                    </div>
                  )}
                </Menu.Item>
              )}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      <Dialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        className="fixed z-10 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen px-4">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full p-6">
            <Dialog.Title
              dir="rtl"
              className="text-lg font-medium text-gray-900"
            >
              {type}
            </Dialog.Title>
            <div dir="rtl" className="mt-2">
              <input
                type="text"
                value={newType}
                onChange={(e) => setNewType(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bgButtonColor"
                placeholder={placeholder}
              />
            </div>
            <div className="mt-4 flex justify-center">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded-md mr-2"
                onClick={() => setIsDialogOpen(false)}
              >
                إلغاء
              </button>
              <button
                className="px-4 py-2 bg-bgButtonColor text-white rounded-md"
                onClick={handleAddNewType}
              >
                إضافة
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default SelectedTextFeild;
