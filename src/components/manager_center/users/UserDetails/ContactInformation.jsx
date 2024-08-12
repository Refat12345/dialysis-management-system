/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import contact from "./../../../../assets/icons/medical-center/users/user-details/ContactInformation.svg";
import edit from "./../../../../assets/icons/medical-center/setting/edit.svg";

import { useDetailsUsers } from "./../../../../pages/manager_center/users/user-details/UserDetailsState";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { useEditUserMutation } from "../../../../services/manager_center/user/user_details/UserDetailsSlice";
import CustomTextField from "../../../public/textfield/CustomTextField";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

function ContactInformation({ data, setData }) {
  const [editUser] = useEditUserMutation();
  const user = useSelector((state) => state.user);

  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(
    JSON.parse(JSON.stringify(data.telecom))
  );

  const [isLoading, setIsLoading] = useState(false); 

  const handleClickOpen = () => {
    setOpen(true);
    setEditedData(data.telecom);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [form, setForm] = useState(data.telecom.map((item) => ({ ...item })));

  const handleFormChange = (index, newValue) => {
    setForm((prevForm) => {
      const newForm = [...prevForm];
      newForm[index].value = newValue;
      return newForm;
    });
  };

  const handleSave = async () => {
    setIsLoading(true); 
    const newData = {
      ...data,
      telecom: form,
    };
    setEditedData(newData);
    setData(newData);

    try {
      await editUser(newData);
      console.log("تم تحديث البيانات بنجاح");
      toast.success("تم تحديث البيانات بنجاح");
    } catch (error) {
      console.error("حدث خطأ أثناء تحديث البيانات", error);
      toast.error("حدث خطأ أثناء تحديث البيانات");
    }

    setIsLoading(false);  
    setIsEditing(false);
    setOpen(false);
  };
  const { isLoading: isDetailsLoading, isSuccess } = useDetailsUsers();


  return (
    <>
      {isSuccess && !isDetailsLoading && (
        <div
          className="border p-4 rounded-xl bg-whiteCard"
          style={{ height: "300px" }}
        >
          <div className="flex flex-row justify-end  mt-2 mb-2 ">
            <div
              dir="ltr"
              className="flex flex-grow justify-start items-center"
            >
              <img src={contact} alt="Contact Information" />
              {
                user.role === "secretary" ? <img
                src={edit}
                alt="Edit"
                className="ml-2 cursor-pointer"
                onClick={handleClickOpen}
              />  : null
              }
              
            </div>
            <h3 className="text-xl text-bgtitle font-bold">معلومات التواصل</h3>
          </div>

          <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
            <DialogTitle className="text-center text-blue-700 text-4xl font-bold">
              المعلومات المتاحة
            </DialogTitle>
            <DialogContent className="p-6">
              <div dir="rtl" className="grid grid-cols-2 gap-8 mt-2">
                {form.map((card, index) => (
                  <div key={index} dir="ltr" className="my-1">
                    <p className="text-right font-bold text-lg">
                      {card.system}
                    </p>
                    <CustomTextField
                      size="3"
                      value={card.value}
                      type="text"
                      onChange={(e) => handleFormChange(index, e.target.value)}
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-row justify-center my-8">
                {/* <Button
                  variant="contained"
                  onClick={handleSave}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
                >
                  حفظ التغييرات
                </Button> */}
                  <Button
                  variant="contained"
                  onClick={handleSave}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
                  disabled={isLoading} 
                >
                  {isLoading ? "جارٍ الحفظ..." : "حفظ التغييرات"}
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <div className="flex flex-row-reverse  ">
            <div className="flex flex-col gap-2 mt-3">
              {Object.values(
                data.telecom.reduce((acc, card) => {
                  if (!acc[card.system]) {
                    acc[card.system] = {
                      system: card.system,
                      values: [],
                    };
                  }
                  acc[card.system].values.push(card.value);
                  return acc;
                }, {})
              ).map((card, index) => (
                <div dir="ltr" key={index}>
                  <p className="text-right"> {card.system}</p>
                  <p className="text-right text-titleColor font-bold"> {card.values.join(", ")}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactInformation;
