/* eslint-disable react/prop-types */
import setting from "./../../../../assets/icons/medical-center/users/user-details/setting.svg";
import { useState,useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {useGetUserPermissionsQuery,useEditUserPermissionsMutation} from "./../../../../services/manager_center/user/user_details/UserDetailsSlice"


const ToggleSwitch = ({ id, name, label, enabled, setEnabled }) => {
  return (
    <label htmlFor={id} className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          id={id}
          name={name}
          type="checkbox"
          className="sr-only"
          checked={enabled}
          onChange={() => setEnabled(!enabled)}
        />
        <div
          className={`block ${
            enabled ? "bg-bgbutton" : "bg-gray-200"
          } w-14 h-8 rounded-full`}
        ></div>
        <div
          className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
            enabled ? "transform translate-x-6" : ""
          }`}
        ></div>
      </div>
      <div className="mr-3 text-xl font-medium">{label}</div>
    </label>
  );
};



const MyButton = ({ text ,id}) => {
  const userIdString = id ? id.toString() : '14';
  const { data: permession, isLoading: isUserpermessionLoading, isSuccess: isUserpermessionSuccess } = useGetUserPermissionsQuery(userIdString);
  const [editUserPermissions] = useEditUserPermissionsMutation();

  const permissionMap = {
    "medicalRecord": "ادارة السجل الطبي",
    "prescription": "ادارة الوصفات الطبية",
  };
  useEffect(() => {
    if (isUserpermessionSuccess && !isUserpermessionLoading && permession) {
      const newSwitchStates = { ...switchStates };
      for (const permission of permession.permissions) {
        const key = permissionMap[permission];
        if (key) {
          newSwitchStates[key] = true;
        }
      }
      setSwitchStates(newSwitchStates);
    }
  }, [isUserpermessionSuccess, isUserpermessionLoading, permession]);


  const [open, setOpen] = useState(false);
  const [switchStates, setSwitchStates] = useState({
    "ادارة السجل الطبي": false,
    "ادارة الوصفات الطبية": false,
    "ادارة التحاليل الطبية": false,
    "ادارة جلسات الغسيل": false,
    "ادارة المعلومات العامة (تعديل بيانات مركز-تعديل بيانات مستخدم)": false,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = (switchId) => {
    setSwitchStates((prevStates) => ({
      ...prevStates,
      [switchId]: !prevStates[switchId],
    }));
  };

  const handleSave = async () => {
    // تحويل الحالة switchStates إلى صيغة البيانات المتوقعة
    const permissionNames = Object.entries(switchStates)
      .filter(([_, enabled]) => enabled)
      .map(([switchId]) => Object.keys(permissionMap).find(key => permissionMap[key] === switchId));

    const newData = {
      userId: userIdString, // استبدل هذا بالمعرف الفعلي للمستخدم
      permissionNames,
    };

    try {
      await editUserPermissions(newData);
      console.log("تم تحديث الصلاحيات بنجاح");
    } catch (error) {
      console.error("حدث خطأ أثناء تحديث الصلاحيات", error);
    }
  };


  return (
    <>
      <button
        className="bg-white h-9 border-2 p-4 hover:bg-slate-300 text-black font-bold py-1 px-4 rounded ml-2"
        onClick={handleClickOpen}
      >
        {text}
        <img className="w-4 h-6 inline-block ml-2" src={setting} />
      </button>

     
{
  text ==="عرض الصلاحيات"?<Dialog open={open} onClose={handleClose}>
  <DialogTitle className="text-center ">
    <span className=" text-4xl text-blue-700">{"الصلاحيات المتاحة"}</span>
  </DialogTitle>
  <DialogContent className="p-4">
    <div dir="rtl" className="grid grid-cols-2 gap-11 mt-5">
      {Object.keys(switchStates).map((switchId, index, array) => {
        const isLastItem = index === array.length - 1;
        return (
          <div
            key={switchId}
            className={`col-span-${isLastItem ? "2" : "1"}`}
          >
            <ToggleSwitch
              id={switchId}
              name={switchId}
              label={switchId}
              enabled={switchStates[switchId]}
              setEnabled={() => handleToggle(switchId)}
            />
          </div>
        );
      })}
    </div>
     <div className="flex flex-row justify-center mb-3">
     <button
        className="mt-5 bg-bgbutton h-9 border-2 p-4 hover:bg-slate-300 text-black font-bold py-1 px-4 rounded-2xl ml-2"
        onClick={handleSave}
      >
        {"حفظ   التغييرات"}
      </button>

     </div>
    
  </DialogContent>
</Dialog>:null
}
      
    </>
  );
};

export default MyButton;
