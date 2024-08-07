/* eslint-disable react/prop-types */
import location from "./../../../../assets/icons/medical-center/users/user-details/locationInformation.svg";
import edit from "./../../../../assets/icons/medical-center/setting/edit.svg";
import { useDetailsUsers } from "./../../../../pages/manager_center/users/user-details/UserDetailsState";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useEditUserMutation } from "../../../../services/manager_center/user/user_details/UserDetailsSlice";
import CustomTextField from "../../../public/textfield/CustomTextField";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

function AdressInformation({ data, setData }) {
  const [editUser] = useEditUserMutation();
  const user = useSelector((state) => state.user);

  const { isLoading: isDetailsLoading, isSuccess } = useDetailsUsers();

  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(
    JSON.parse(JSON.stringify(data.address))
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setEditedData(data.telecom);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [form, setForm] = useState(data.address.map((item) => ({ ...item })));

  const handleFormChange = (index, newValue) => {
    console.log(index, newValue);
    setForm((prevForm) => {
      const newForm = [...prevForm];
      newForm[index].cityName = newValue;
      return newForm;
    });
  };

  const handleSave = async () => {
    setIsLoading(true);
    const newData = {
      ...data,
      address: form,
    };
    setEditedData(newData);
    setData(newData);

    console.log("iii",newData)

    try {
      const returnedData = await editUser(newData);
      toast.success("تم تحديث البيانات بنجاح");
      console.log("تم تحديث البيانات بنجاح");
    } catch (error) {
      toast.error("حدث خطأ أثناء تحديث البيانات");
      console.error("حدث خطأ أثناء تحديث البيانات", error);
    }

    setIsLoading(false);
    setIsEditing(false);
    setOpen(false);
  };

  return (
    <>
      {isSuccess && !isDetailsLoading && data.length != 0 && (
        <div className="border p-4 rounded-xl bg-whiteCard">
          <div className="flex flex-row justify-end  mt-2 mb-2 ">
            <div
              dir="ltr"
              className="flex flex-grow justify-start items-center"
            >
              <img src={location} alt="Contact Information" />
              {
                user.role === "secretary" ?  <img
                src={edit}
                alt="Edit"
                className="ml-2 cursor-pointer "
                onClick={handleClickOpen}
              /> : null
              }
             
            </div>
            <h3 className="text-xl text-bgtitle">العنوان</h3>
          </div>

          <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
            <DialogTitle className="text-center text-blue-700 text-4xl font-bold">
              المعلومات المتاحة
            </DialogTitle>
            <DialogContent className="p-6">
              <div dir="rtl" className="grid grid-cols-2 gap-8 mt-2">
                {form.map((card, index) => (
                  <div key={index} dir="ltr" className="my-1">
                    <p className="text-right font-bold text-lg">{card.use}</p>
                    <CustomTextField
                      size="3"
                      value={card.cityName}
                      type="text"
                      onChange={(e) => handleFormChange(index, e.target.value)}
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-row justify-center my-8">
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
                data.address.reduce((acc, card) => {
                  if (!acc[card.use]) {
                    acc[card.use] = {
                      use: card.use,
                      values: [],
                    };
                  }
                  acc[card.use].values.push(card.cityName);
                  return acc;
                }, {})
              ).map((card, index) => (
                <div dir="ltr" key={index}>
                  <p className="text-right"> {card.use}</p>
                  <p className="text-right"> {card.values.join(", ")}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AdressInformation;
