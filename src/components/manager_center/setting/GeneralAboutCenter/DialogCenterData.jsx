/* eslint-disable react/prop-types */

import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { CustomButton } from "../../../../components";
import {
  bodyMeduimStyle,
  bodySmallStyle,
  heightSmall,
} from "../../../../utils/StyleUtils.js";
import { useAddCenterContactMutation } from "../../../../services/manager_center/setting/SettingSlice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useAddMedicalDataMutation,
  useUpdateMedicalDataMutation,
} from "../../../../services/manager_center/setting/SettingSlice";
import CustomTextField from "../../../public/textfield/CustomTextField";

function DialogCenterData({ open, setOpen, data, type }) {
  const [charityName, setCharityName] = useState(data.charityName || "");
  const [line, setLine] = useState(
    data["address"] && data["address"][0] ? data["address"][0].line : ""
  );
  const [use, setUse] = useState(
    data["address"] && data["address"][0] ? data["address"][0].use : ""
  );
  const [cityName, setCityName] = useState(
    data["address"] && data["address"][0] ? data["address"][0].cityName : ""
  );
  const [countryName, setCountryName] = useState(
    data["address"] && data["address"][0] ? data["address"][0].countryName : ""
  );

  const user = useSelector((state) => state.user);
  const [addMedicalData] = useAddMedicalDataMutation();
  const [updataMedicalData] = useUpdateMedicalDataMutation();
  const [loading, setLoading] = useState(false);


  const handleClose = () => {
    setOpen(false);
  };

  const handleCharityNameChange = (event) => {
    setCharityName(event.target.value);
  };

  const handleLineChange = (event) => {
    setLine(event.target.value);
  };

  const handleCityNameChange = (event) => {
    setCityName(event.target.value);
  };

  const handleCountryNameChange = (event) => {
    setCountryName(event.target.value);
  };

 
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    let newData = {
      charityName: charityName,
      address: {
        line: line,
        use: "المركز",
        cityName: cityName,
        countryName: countryName,
      },
    };
    try {
      if (type === "add") {
        if (charityName && line && cityName && countryName) {
          await addMedicalData(newData).unwrap();
          toast.success("تم إرسال البيانات بنجاح!");
        } else {
          toast.error("يرجى ملء جميع البيانات قبل الإرسال.");
        }
      } else {
        newData = {
          charityName: charityName,
          id: user.centerID.toString(),
          address: [
            {
              id: data.address[0].id,
              line: line,
              use: "المركز",
              cityName: cityName,
              countryName: countryName,
            },
          ],
        };
        await updataMedicalData(newData).unwrap();
      }
      toast.success("تم إرسال البيانات بنجاح!");
      setOpen(false);
    } catch (error) {
      if (error.status === 400) {
        const errorMessage = error.data.error || "حدث خطأ أثناء تحديث البيانات";
        console.error(errorMessage);
        toast.error(errorMessage);
      } else if (error.status === 403) {
        const errorMessage =
          error.data.error ||
          "ليس لديك التصاريح اللازمة للوصول إلى هذه الـ API";
        console.error(errorMessage);
        toast.error(errorMessage);
      } else {
        console.error("حدث خطأ أثناء تحديث البيانات", error);
        toast.error("حدث خطأ أثناء تحديث البيانات");
      }
    }
     finally {
      setLoading(false);
    }
  };


  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle className="text-center ">
      <span style={{ color: "#e0bf7d" }} className="text-4xl ">
          {"تعديل معلومات المركز"}
        </span>
      </DialogTitle>
      <DialogContent className="p-4 w-full " dir="rtl">
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <CustomTextField
            size="3"
            required={true}
            label={"الجمعية الخيرية التابعة للمركز"}
            value={charityName}
            type="text"
            onChange={handleCharityNameChange}
          />

          <CustomTextField
            size="3"
            required={true}
            label={"الشارع"}
            value={line}
            type="text"
            onChange={handleLineChange}
          />

          <CustomTextField
            size="3"
            required={true}
            label={"اسم الحي"}
            value={cityName}
            type="text"
            onChange={handleCityNameChange}
          />

          <CustomTextField
            size="3"
            required={true}
            label={"اسم المحافظة:"}
            placeholder="اسم المستخدم"
            value={countryName}
            type="text"
            onChange={handleCountryNameChange}
          />
          <DialogActions>
            {/* <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              حفظ
            </button> */}
             <CustomButton
              variant="solid"
              
              className={`bg-bgbutton text-white h-8 transition-all font-semibold ${bodyMeduimStyle}`}
              title={
                <div className="flex items-center justify-center">
                  {loading ? (
                    <span className={`${bodySmallStyle}`}>جاري التحميل...</span>
                  ) : (
                    <>
                      <span className={`${bodySmallStyle}`}>حفظ التغييرات</span>
                      <div className="lg:w-2 md:w-2 w-1"></div>
                    </>
                  )}
                </div>
              }
              radius="full"
              disabled={loading}
            />
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default DialogCenterData;
