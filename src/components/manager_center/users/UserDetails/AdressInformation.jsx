/* eslint-disable react/prop-types */
import location from "./../../../../assets/icons/medical-center/users/user-details/locationInformation.svg";
import { useDetailsUsers } from "./../../../../pages/manager_center/users/user-details/UserDetailsState";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useState } from "react";
import { useEditUserMutation } from "../../../../services/manager_center/user/user_details/UserDetailsSlice";
function AdressInformation({ data, setData }) {
  const [editUser] = useEditUserMutation();

  const { isLoading, isSuccess } = useDetailsUsers();

  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(
    JSON.parse(JSON.stringify(data.address))
  );

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
    const newData = {
      ...data,
      address: form,
    };
    setEditedData(newData);
    setData(newData);

    try {
      await editUser(newData);
      console.log("تم تحديث البيانات بنجاح");
    } catch (error) {
      console.error("حدث خطأ أثناء تحديث البيانات", error);
    }

    setIsEditing(false);
    setOpen(false);
  };

  return (
    <>
      {isSuccess && !isLoading && data.length != 0 && (
        <div className="border p-4 rounded-xl bg-whiteCard">
          <div className="flex flex-row justify-end  mt-2 mb-2 ">
            <div
              dir="ltr"
              className="flex flex-grow justify-start items-center"
            >
              <img src={location} alt="Contact Information" />
              <img
                src={location}
                alt="Edit"
                className="ml-2 cursor-pointer"
                onClick={handleClickOpen}
              />
            </div>
            <h3 className="text-xl text-bgtitle">العنوان</h3>
          </div>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle className="text-center ">
              <span className=" text-4xl text-blue-700">
                {"المعلومات المتاحة"}
              </span>
            </DialogTitle>
            <DialogContent className="p-4">
              {
                <div dir="rtl" className="grid grid-cols-2 gap-11 mt-5">
                  {form.map((card, index) => (
                    <div key={index} dir="ltr">
                      <p className="text-right">{card.use}</p>
                      <TextField
                        variant="outlined"
                        value={card.cityName}
                        onChange={(e) =>
                          handleFormChange(index, e.target.value)
                        }
                      />
                    </div>
                  ))}
                  <div className="flex flex-row justify-center mb-3">
                    <Button
                      variant="contained"
                      onClick={handleSave}
                      className="bg-bgbutton h-9 border-2 p-4 hover:bg-slate-300 text-black font-bold py-1 px-4 rounded-2xl ml-2"
                    >
                      {"حفظ التغييرات"}
                    </Button>
                  </div>
                </div>
              }
            </DialogContent>
          </Dialog>

          {/* <div className="flex flex-row-reverse  ">
            <div className="flex flex-col gap-2 mt-3">
              {data.addressData?.work?.[0]?.cityName !== undefined ? (
                <>
                  <h3 className="text-right">:العمل</h3>
                  <h3 className="text-right">
                    {data.addressData.work[0].cityName}
                  </h3>
                </>
              ) : null}
              {data.addressData?.home?.[0]?.cityName !== undefined ? (
                <>
                  <h3 className="text-right">:العمل</h3>
                  <h3 className="text-right">
                    {data.addressData.home[0].cityName}
                  </h3>
                </>
              ) : null}
            </div>
          
          </div> */}

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
