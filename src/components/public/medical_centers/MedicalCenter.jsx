/* eslint-disable react/prop-types */
import { useState } from "react";
import EllipsisIcon from "../../../assets/icons/public/ellipsis.svg";
import AlertDialog from "../dialog/Dialog";
import MedicalCenterDetails from "./MedicalCenterDetails";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const MedicalCenter = ({ icons, content, role ,id}) => {
  const title = ["العنوان", "معلومات التواصل", "تفاصيل عامة"];
  const height = window.innerHeight;
  const width = window.innerWidth;

  const responsiveCenterIcon = height > 600 ? (height > 700 ? "w-[23.8%]" : (height > 630 ? "w-[22%]" : "w-[21.2%]")) : "w-[20%]";
  const responsiveCenterName = height > 600 ? (height > 700 ? "mt-3 text-17 " : (height > 630 ? "mt-2 text-base" : "mt-1.5 text-base")) : "mt-2 text-sm";
  const responsiveAddress = height > 600 ? (height > 700 ? "mt-3" : (height > 630 ? "mt-2" : "mt-1.5")) : "mt-2";
  const responsiveAddressContent = height > 700 && width > 1315 ? "text-s" : "text-xs";

  const [isEllipsisHovered, setIsEllipsisHovered] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleEllipsisClick = (event) => {
    event.stopPropagation();
  };

  const handleEllipsisMouseEnter = () => {
    setIsEllipsisHovered(true);
  };

  const handleEllipsisMouseLeave = () => {
    setIsEllipsisHovered(false);
  };

  const colors = {
    titleColor: "primaryColor",
    contentColor: "bgButtonColor",
  };
  const filter = {
    array: ["تعطيل المركز"],
  };

  const onSelect = (content) => {
    if (content === "تعطيل المركز") {
      setDialogOpen(true);
    }
  };

  return (
    <div
      dir="rtl"
      className={`medical-center p-4 bg-white rounded-lg shadow-lg ${
        isEllipsisHovered ? "" : "hover:cursor-pointer hover:bg-gray-100 transition-transform transform hover:scale-105"
      }`}
    >
      <div className="flex flex-row justify-between">
        <ToastContainer position="top-right"/>
        <div className={`${responsiveCenterIcon}`}>
          <img src={icons.centerIcon} />
        </div>
        <div onClick={handleEllipsisClick}>
          {role === "admin" ? (
            <AlertDialog
              renderComponent={
                <img
                  src={EllipsisIcon}
                  className="w-6 h-6 hover:bg-gray-100 hover:cursor-pointer"
                  onMouseEnter={handleEllipsisMouseEnter}
                  onMouseLeave={handleEllipsisMouseLeave}
                />
              }
              contentComponent={
                <div className="min-w-[300px]">
                  <MedicalCenterDetails title={title} content={content} />
                </div>
              }
              titleButton={"رجوع"}
            />
          ) : (
            <Drop
              handleEllipsisMouseEnter={handleEllipsisMouseEnter}
              handleEllipsisMouseLeave={handleEllipsisMouseLeave}
              colors={colors}
              filter={filter.array}
              onSelect={(content) => onSelect(content)}
              onClick={handleEllipsisClick}
            />
          )}
        </div>
      </div>
      <p className={`${responsiveCenterName} font-primaryBold`}>{content.centerName}</p>
      <div className={`flex ${responsiveAddress} mb-2`}>
        <img className="w-5 h-5" src={icons.addressIcon} />
        <p
          className={`font-primaryRegular ${responsiveAddressContent} ${
            width > 1320 ? "mr-2" : "mr-1.5"
          } whitespace-nowrap overflow-hidden text-ellipsis`}
        >
          {content.address === "" ? "لا يوجد عنوان بعد" : content.address}
        </p>
      </div>
      <CenterUserDialog type = {"Center"} dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} id = {id} />
    </div>
  );
};

export default MedicalCenter;

export const Drop = ({ filter, onSelect, colors, handleEllipsisMouseEnter, handleEllipsisMouseLeave }) => {
  const handleMenuItemClick = (event, content) => {    
    event.stopPropagation(); 
    onSelect(content);
  };

  return (
    <Menu dir="rtl" as="div" className="relative inline-block w-full">
      <div>
        <Menu.Button
          className={`inline-flex justify-between w-[90%] text-sm font-primaryBold hover:bg-${colors.titleColor} focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 transition-transform transform hover:scale-105`}
        >
          <img
            src={EllipsisIcon}
            className="w-7 h-7 hover:bg-gray-100 hover:cursor-pointer"
            onMouseEnter={handleEllipsisMouseEnter}
            onMouseLeave={handleEllipsisMouseLeave}
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
        <Menu.Items className="absolute -right-20 mt-2 w-56 rounded-lg bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-50 max-h-[250px] overflow-y-auto">
          <div className="px-1 py-1">
            {filter.map((content, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <button
                    onClick={(event) => handleMenuItemClick(event, content)}
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
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};




/* eslint-disable react/prop-types */


import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import ButtonLoader from "../loader/ButtonLoader";
import { useBlockMedicalCenterMutation } from "../../../services/manager/block_medical_center/BlockMedicalCenter";
import { toast, ToastContainer } from "react-toastify";
import { useBlocPatientMutation } from "../../../services/manager_center/patient/block_patient/block_pateint";

export function CenterUserDialog({ dialogOpen, setDialogOpen ,id , type}) {
  console.log(id);
  
 
  const handleClose = (event) => {
    event.stopPropagation()
    setDialogOpen(false);
  };

  const[blockMedicalCenter , {isLoading}] = useBlockMedicalCenterMutation()
  const[blocPatient , {isLoading:loading}] = useBlocPatientMutation()

  const handlePost = async (event)=>{
    event.stopPropagation()
    try{
      if(type === "user") {
        await blocPatient(id).unwrap()
        toast.success("تم تعطيل حساب المستخدم بنجاح")
      } else {
        await blockMedicalCenter(id).unwrap()
        toast.success("تم تعطيل المركز بنجاح")
      }
      setDialogOpen(false);
    }catch(error){
      toast.error("حدث خطأ معين")
      
    }
  }

  return (
    <Dialog open={dialogOpen} onClose={handleClose}>
    
      <DialogContent className="p-4 w-full" dir="rtl">
      <p className="font-bold text-titleColor text-lg">
        {"هل أنت متأكد من تعطيل حساب " + (type ==="user" ? "المستخدم" : "المركز")}
        </p>
        <div className="mb-3"></div>
        <div className="flex justify-center">
        <button onClick={handleClose}
            className='mb-1 w-14 bg-bgButtonColor text-white hover:bg-bgSideButton hover:text-titleSideColor py-1 px-3 rounded-md font-primaryBold transition-transform transform hover:scale-105'
          >{"لا"}
          </button>
            <div className="mr-3"></div>
          { (type === "user" ? !loading : !isLoading) ? 
            <button onClick={handlePost}
            className='mb-1 w-14 bg-bgButtonColor text-white hover:bg-bgSideButton hover:text-titleSideColor py-1 px-3 rounded-md font-primaryBold transition-transform transform hover:scale-105'
          >{"نعم"}
          </button>
          :<ButtonLoader/>}
        </div>
      </DialogContent>
    </Dialog>
  );
}




