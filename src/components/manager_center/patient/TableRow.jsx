/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import patient from "../../../assets/icons/medical-center/patient/patient.svg";
import React, { useState, useContext } from "react";
import down from "../../../assets/icons/medical-center/patient/chevron-down.svg";
import ChevronIcon from "../../../assets/icons/public/chevron-left.svg";
import { useFormatDate } from "../../../utils/DateUtils";
import AlertDialog from "../../public/dialog/Dialog";
import AuditingDetailsDialog from "../../public/auditing/AuditingDetailsDialog";
import RejectOrder from "../../../pages/manager_center/orders/sections/RejectOrder";
import AcceptOrder from "../../../pages/manager_center/orders/sections/AcceptOrder";
function TableRow({ row, index, handleRowClick, getRowColor ,type ,id}) {
 
  const userIdString = id ? id.toString() : '14';
    const object = {
      connectOne :Object.values(row)[0],
      connectTow :Object.values(row)[1],
      connectThree :Object.values(row)[2],
      connectFour :Object.values(row)[3],
      connectFive :Object.values(row)[4],
      connectSix :Object.values(row)[5],
      connectSeven:Object.values(row)[6]
    } 
  
    return (
      <tr
        className={`text-right border-b ${getRowColor(index)}`}
        onClick={() => {
          handleRowClick(userIdString)
          sessionStorage.setItem("patientId",userIdString)
        }}

      >
        <td className="py-3 px-4 ">
          <div>
            {
            type != "auditing"  && 
              type != "orders" ? <img
import RejectionReason from "../../../pages/manager_center/orders/sections/RejectionReason";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import SelectedTextFeild from "../../public/textfield/SelectedTextFeild";
function TableRow({ row, index, handleRowClick, getRowColor, type, id }) {
  const navigate = useNavigate();

  const userIdString = id ? id.toString() : "14";
  const [state, setState] = useState({
    secrtaryValue: "",
    adminValue: "",

    selectSecertaryOption: (val) => selectSecertaryOption(val),
    selectAdminOption: (val) => selectAdminValueOption(val),
  });

  const selectSecertaryOption = (value) => {
    updateState({ secrtaryValue: value });

    switch (value) {
      case "اضافة وصفة طبية":
        navigate(`/app/patient/${id}/PrescriptionInfo`);
        break;
      case "اضافة المعلومات العامة":
        navigate(`/app/patient/${id}/addPatientInfo`);
        break;
      case "اردني":
        history.push("/path-for-jordanian");
        break;
      case "اجنبي":
        history.push("/path-for-foreigner");
        break;
      default:
        break;
    }



  };

  const selectAdminValueOption = (value) => {
    updateState({ adminValue: value });
  };

  const updateState = (newValues) => {
    setState((prevState) => ({
      ...prevState,
      ...newValues,
    }));
  };

  const object = {
    connectOne: Object.values(row)[0],
    connectTow: Object.values(row)[1],
    connectThree: Object.values(row)[2],
    connectFour: Object.values(row)[3],
    connectFive: Object.values(row)[4],
    connectSix: Object.values(row)[5],
    connectSeven: Object.values(row)[6],
  };
  const handleClose = () => {
    setOpen(false);
  };
  const user = useSelector((state) => state.user);

  const [open, setOpen] = useState(false);

  const handleMenuClick = (event) => {
    event.stopPropagation();
    setOpen(!open);
  };
  const secrtaryFilter = {
    array: ["اضافة وصفة طبية", "اضافة المعلومات العامة"],
  };

  const adminFilter = {
    array: ["سوري", "فلسطيني", "اردني", "اجنبي"],
  };

  return (
    <tr
      className={`text-right border-b ${getRowColor(index)}`}
      onClick={() => {
        handleRowClick(userIdString);
        sessionStorage.setItem("patientId", userIdString);
      }}
    >
      <td className="py-3 px-4 ">
        <div>
          {type != "auditing" && type != "orders" ? (
            <img
              className="inline-block w-6 h-6 mr-0"
              src={patient}
              alt="Patient"
            />
          ) : (
            ""
          )}
          <h1 className="inline-block pr-2 pl-0 ml-0">{object.connectOne}</h1>
        </div>
      </td>
      <td className={`py-3 px-4`}>
        {type === "auditing"
          ? useFormatDate(object.connectTow)
          : object.connectTow}
      </td>
      {type === "orders" ? (
        <td className="py-3 px-4">
          <p className="whitespace-nowrap overflow-hidden text-ellipsis w-[90%]">
            {object.connectThree}
          </p>
        </td>
        <td className={`py-3 px-4 whitespace-nowrap overflow-hidden text-ellipsis  `}>{type === "auditing" ? useFormatDate(object.connectTow) : object.connectTow}</td>
        {type === "orders" ? <td className="py-3 px-4" >
        
              <p className="whitespace-nowrap overflow-hidden text-ellipsis w-[90%]" >{object.connectThree}</p>
  
          </td> :<td className="py-3 px-4">{object.connectThree}</td>}
        {object.connectFour != undefined && <td className="py-3 px-4 ">{object.connectFour}</td>}
        {
            (object.connectFive != undefined && type != "auditing" )&& 
            <td className={`py-3 w-48 ${type === "dialysis" ? "pr-6":""}`} dir="ltr">
              {object.connectFive}
            </td>
          }
          {
          ( object.connectSix != undefined &&  type != "auditing" )&& 
            <td className="py-3 w-48" dir="ltr">
              {object.connectSix}
            </td>
          }
          
      ) : (
        <td className="py-3 px-4">{object.connectThree}</td>
      )}
      {object.connectFour != undefined && (
        <td className="py-3 px-4 ">{object.connectFour}</td>
      )}
      {object.connectFive != undefined && type != "auditing" && (
        <td
          className={`py-3 w-48 ${type === "dialysis" ? "pr-6" : ""}`}
          dir="ltr"
        >
          {object.connectFive}
        </td>
      )}
      {object.connectSix != undefined && type != "auditing" && (
        <td className="py-3 w-48" dir="ltr">
          {object.connectSix}
        </td>
      )}

      {type === "orders" && <td className="w-[1px]"></td>}
      {type === "orders" && <td>
        <div className="flex justify-end">
          <AlertDialog renderComponent={<div className="rounded-full border-2 border-green-500 text-green-500 hover:cursor-pointer hover:bg-green-50 hover:text-black ml-4 w-16 ">
      {type === "orders" && (
        <td>
          <div className="flex justify-end">
            <div className="rounded-full border-2 border-green-500 text-green-500 hover:cursor-pointer hover:bg-green-50 hover:text-black ml-4 w-16 ">
              <p className="text-md text-center ">قبول</p>
          </div>}
            contentComponent={<AcceptOrder id = {id}/>}
          />
          <AlertDialog renderComponent={<div className=" rounded-full text-red-500 border-2 border-red-500 hover:cursor-pointer hover:bg-red-100 hover:text-black ml-5 w-16 ">
              <p className="text-md text-center ">رفض</p>
          </div>}
            contentComponent={<RejectOrder id= {id}/>
          }
          
          />
        </div>
        
        </td>}
        {
        type != "dialysis" &&
        <td className={`py-3 ${type != "orders" ?"pr-12":"pr-0"}`} align= {`${type === "orders" ? "right" :""} ${type === "orders" && "w-16"}`}>
        {type === "auditing" ?
        <div className= {`border border-gray-300 rounded-md w-7 pr-[3px] hover:cursor-pointer ${index % 2 === 0 ? "hover:bg-gray-200" :"hover:bg-gray-300"}`}>
            <AlertDialog renderComponent={<img className="w-5 h-5" src={ChevronIcon} alt="AUDIT" />}
                        contentComponent={<AuditingDetailsDialog oldData={object.connectFive} newData={object.connectSix} details={object.connectSeven}/>}
                        titleButton={"رجوع"} 
            />
        </div>:
          type === "orders" ?
          <div className= {`border border-gray-300 rounded-md w-7 pr-[3px] hover:cursor-pointer ${index % 2 === 0 ? "hover:bg-gray-200" :"hover:bg-gray-300  "}`}>
            <AlertDialog renderComponent={<img className="w-5 h-5" src={ChevronIcon} alt="AUDIT" />}
                        contentComponent={<div dir="rtl" className=" flex flex-col ">
                          <p className="self-center text-lg font-bold mb-5">تفاصيل الطلب :</p>
                          <p className="text-base text-titleColor font-bold">{object.connectThree}</p>
                        </div>}
                        titleButton={"رجوع"} 
            />
        </div>
          : <img className="w-5 h-5 pr-18 -ml-4" src={down} alt="Patient" />}
      </td>
      }
      
      </tr>
    );
  }
            </div>
            <AlertDialog
              renderComponent={
                <div className=" rounded-full text-red-500 border-2 border-red-500 hover:cursor-pointer hover:bg-red-100 hover:text-black ml-5 w-16 ">
                  <p className="text-md text-center ">رفض</p>
                </div>
              }
              contentComponent={<RejectionReason />}
            />
          </div>
        </td>
      )}
      {type != "dialysis" && (
        <td
          className={`py-3 ${type != "orders" ? "pr-12" : "pr-0"}`}
          align={`${type === "orders" ? "right" : ""} ${
            type === "orders" && "w-16"
          }`}
        >
          {type === "auditing" ? (
            <div
              className={`border border-gray-300 rounded-md w-7 pr-[3px] hover:cursor-pointer ${
                index % 2 === 0 ? "hover:bg-gray-200" : "hover:bg-gray-300"
              }`}
            >
              <AlertDialog
                renderComponent={
                  <img className="w-5 h-5" src={ChevronIcon} alt="AUDIT" />
                }
                contentComponent={
                  <AuditingDetailsDialog
                    oldData={object.connectFive}
                    newData={object.connectSix}
                    details={object.connectSeven}
                  />
                }
                titleButton={"رجوع"}
              />
            </div>
          ) : type === "orders" ? (
            <div
              className={`border border-gray-300 rounded-md w-7 pr-[3px] hover:cursor-pointer ${
                index % 2 === 0 ? "hover:bg-gray-200" : "hover:bg-gray-300  "
              }`}
            >
              <AlertDialog
                renderComponent={
                  <img className="w-5 h-5" src={ChevronIcon} alt="AUDIT" />
                }
                contentComponent={
                  <div dir="rtl" className=" flex flex-col ">
                    <p className="self-center text-lg font-bold mb-5">
                      تفاصيل الطلب :
                    </p>
                    <p className="text-base text-titleColor font-bold">
                      {object.connectThree}
                    </p>
                  </div>
                }
                titleButton={"رجوع"}
              />
            </div>
          ) : (
            <>
              <img
                onClick={handleMenuClick}
                className="w-5 h-5 pr-18 -ml-4"
                src={down}
                alt="Patient"
              />
              {open && user.role === "secretary" && (
                <SelectedTextFeild
                  activeLabel={false}
                  onClick={(event) => event.stopPropagation()}
                  value={
                    state.secrtaryValue === "" ? "اختر" : state.secrtaryValue
                  }
                  filter={secrtaryFilter.array}
                  onSelect={(val, event) => {
                    state.selectSecertaryOption(val);
                    // event.stopPropagation();
                    if (event !== undefined) {
                      event.stopPropagation();
                    }

                  }}
                />
              )}
            </>
          )}
        </td>
      )}
    </tr>
  );
}

export default TableRow;
