/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import patient from "../../../assets/icons/medical-center/patient/patient.svg";
import { useState } from "react";
import ChevronIcon from "../../../assets/icons/public/chevron-left.svg";
import { convertDateToArabicFormat } from "../../../utils/DateUtils";
import AlertDialog from "../../public/dialog/Dialog";
import AuditingDetailsDialog from "../../public/auditing/AuditingDetailsDialog";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import OrdersStatus from "../../../pages/manager_center/orders/sections/OrderStatus";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAddFromWaitingToPendingMutation } from "../../../services/manager_center/patient/patient_list/PatientSlice";
import DropDownPatient from "../../../pages/manager_center/patient/patient_list/Menu";
import PublicDialog from "../../public/dialog/AlertDialog";

function TableRow({
  row,
  index,
  handleRowClick,
  getRowColor,
  type,
  id,
  typeOFSelectedPatient,
  setIsEllipsisHovered,
}) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const userIdString = id ? id.toString() : "14";

  const [addFromWaitingToPending] = useAddFromWaitingToPendingMutation();

  const [state, setState] = useState({
    secrtaryValue: "",
    adminValue: "",
    secrtaryWaitingValue: "",

    selectSecertaryOption: (val) => selectSecertaryOption(val),
    selectAdminOption: (val) => selectAdminValueOption(val),
    selectSecertaryWaitingOption: (val ,id) => selectSecertaryWaitingOption(val,id),
  });

 
  
  const selectSecertaryOption = (value) => {
    updateState({ secrtaryValue: value });

    switch (value) {
      case "اضافة وصفة طبية":
        navigate(`/app/patient/acceptable/${id}/PrescriptionInfo`);
        break;
      case "اضافة تحليل طبي":
        navigate(`/app/patient/acceptable/${id}/addMedicalAnalysis`);
        break;
      case "اضافة مستلزمات جلسة الغسيل":
        navigate(`/app/patient/acceptable/${id}/assignMaterialToUserCenter`);
        break;
      case "اعطاء موعد":
        navigate(`/app/patient/acceptable/${id}/appointment/${id}`);
        break;
      case "اجنبي":
        history.push("/path-for-foreigner");
        break;
      default:
        break;
    }
  };

  const selectSecertaryWaitingOption = async (value ,id) => {
    updateState({ secrtaryWaitingValue: value });
    const data = {
      centerID: user.centerID.toString(),
      userID: id,
    };
    try {
      const result = await addFromWaitingToPending(data);
      toast.success("تمت الاضافة بنجاح");
    } catch (error) {
      toast.error("حدث خطأ اثناء الاضافة", error);
    }
  };

  const colors = {
    titleColor: "primaryColor",
    contentColor: "bgButtonColor",
    textColor: "textMenuColor",
  };
  const handleEllipsisMouseEnter = () => {
    setIsEllipsisHovered(true);
  };

  const handleEllipsisMouseLeave = () => {
    setIsEllipsisHovered(false);
  };

  const selectAdminValueOption = (value) => {
    updateState({ adminValue: value });
    switch (value) {
      case "نقل المريض":
        navigate(`/app/patient/acceptable/${id}/medicalCenters`);
        break;
      case "تعطيل الحساب":
        navigate(`/app/patient/${id}/addMedicalAnalysis`);
        break;
      default:
        break;
    }
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

  const [open, setOpen] = useState(false);
  const [acceptOrder, setAcceptOrder] = useState(false);
  const [rejectOrder, setRejectOrder] = useState(false);

  const handleMenuClick = (event) => {
    event.stopPropagation();
    setOpen(!open);
  };
  const secrtaryFilter = {
    array: [
      "اضافة وصفة طبية",
      "اضافة مستلزمات جلسة الغسيل",
      "اضافة تحليل طبي",
      "اعطاء موعد",
    ],
  };

  const adminFilter = {
    array: ["نقل المريض", "تعطيل الحساب"],
  };

  const secrtaryWaitingFilter = {
    array: ["َضم المريض للمركز"],
  };
  return (
    <tr
      className={`text-right border-b ${getRowColor(index)}`}
      onClick={() => {
        handleRowClick(userIdString);
        sessionStorage.setItem("patientId", userIdString);
      }}
    >
      <td
        dir="rtl"
        className="py-3 px-4 whitespace-nowrap overflow-hidden text-ellipsis "
      >
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
      <td
        className={`py-3 px-4 whitespace-nowrap overflow-hidden text-ellipsis`}
      >
        {type === "auditing"
          ? convertDateToArabicFormat(object.connectTow)
          : object.connectTow}
      </td>
      {type === "orders" ? (
        <td className="py-3 px-4">
          <p className="whitespace-nowrap overflow-hidden text-ellipsis w-[90%]">
            {object.connectThree}
          </p>
        </td>
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

      {type === "orders" && user.role != "secretary" && (
        <td className="w-[1px]"></td>
      )}
      {type === "orders" && user.role != "secretary" && (
        <td>
          <div className="flex justify-end">
              <div onClick={()=>setAcceptOrder(true)} className="rounded-full border-2 border-green-500 text-green-500 hover:cursor-pointer hover:bg-green-50 hover:text-black ml-4 w-16 ">
                  <p className="text-md text-center ">قبول</p>
              </div>
              <PublicDialog component={<OrdersStatus id={id} type={"accepted"} setOpen={setAcceptOrder}/>} open={acceptOrder} setOpen={setAcceptOrder}/>
          
            <div onClick={()=>setRejectOrder(true)} className=" rounded-full text-red-500 border-2 border-red-500 hover:cursor-pointer hover:bg-red-100 hover:text-black ml-5 w-16 ">
                  <p className="text-md text-center ">رفض</p>
            </div>
            <PublicDialog component={<OrdersStatus id={id} type={"rejected"} setOpen={setRejectOrder}/>}
            open={rejectOrder} setOpen={setRejectOrder}
          
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
                  <div dir="rtl" className=" flex flex-col min-w-[400px] ">
                    <p className="self-center text-lg font-bold mb-3">
                      تفاصيل الطلب
                    </p>
                    <p className="text-base text-center text-titleColor font-bold">
                      {object.connectThree}
                    </p>
                  </div>
                }
                titleButton={"رجوع"}
              />
            </div>
          ) : (
            <div
              className="h-full w-full "
              onMouseEnter={handleEllipsisMouseEnter}
              onMouseLeave={handleEllipsisMouseLeave}
              onClick={handleMenuClick}
            >
              {user.role != "superAdmin" && (
                <div className="">
                  <DropDownPatient
                  colors={colors}
                  filter={
                    user.role === "admin"
                      ? adminFilter.array
                      : typeOFSelectedPatient !== "مرضى انتظار" && typeOFSelectedPatient !== "مرضى مرفوضين"
                      ? secrtaryFilter.array
                      : secrtaryWaitingFilter.array
                  }
                  onSelect={(val) => {
                    user.role === "admin"
                      ? state.selectAdminOption(val)
                      : typeOFSelectedPatient !== "مرضى انتظار" && typeOFSelectedPatient !== "مرضى مرفوضين"
                      ? state.selectSecertaryOption(val)
                      : state.selectSecertaryWaitingOption(val ,id);
                  }}
                />
                </div>
              )}
            </div>
          )}
        </td>
      )}
    </tr>
  );
}

export default TableRow;
