/* eslint-disable no-undef */
// /* eslint-disable react/prop-types */
// import contact from "./../../../../assets/icons/medical-center/users/user-details/ContactInformation.svg";
// import { useDetailsUsers } from "./../../../../pages/manager_center/users/user-details/UserDetailsState";

// function ContactInformation({ data }) {
//   console.log("ddddddd",data);

// const { isLoading, isSuccess } = useDetailsUsers();

// if (!data || !data.telecomData || (data.telecomData.phone && data.telecomData.phone.length === 0) && (!data.telecomData.gmail || data.telecomData.gmail.length === 0)) {
//   return <div>جاري تحميل المعلومات...</div>;
// }

// return (
//   <>
//     {isSuccess && !isLoading && (
//       <div className="border p-4 rounded-xl bg-whiteCard" style={{ height: "300px" }}>
//         <div className="flex flex-row justify-end  mt-2 mb-2 ">
//           <div dir="ltr" className="flex flex-grow justify-start items-center">
//             <img src={contact} alt="Contact Information" />
//           </div>
//           <h3 className="text-xl text-bgtitle">معلومات التواصل</h3>
//         </div>
//         <div className="flex flex-row-reverse  ">
//           <div className="flex flex-col gap-2 mt-3">
//             {data.telecomData.phone?.[0]?.value && (
//               <>
//                 <h3 className="text-right">:الجوال</h3>
//                 <h3 className="text-right">
//                   {data.telecomData.phone[0].value}
//                 </h3>
//               </>
//             )}
//             {data.telecomData.phone?.[1]?.value && (
//               <>
//                 <h3 className="text-right">الهاتف</h3>
//                 <h3 className="text-right">
//                   {data.telecomData.phone[1].value}
//                 </h3>
//               </>
//             )}
//             {data.telecomData.gmail?.[0]?.value && (
//               <>
//                 <div className="flex flex-col gap-2">
//                   <h3 className="text-right mt-2">البريد الاكتروني</h3>
//                   <h3 className="text-right">
//                     {data.telecomData.gmail[0].value}
//                   </h3>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     )}
//   </>
// );
// }

// export default ContactInformation;

/* eslint-disable react/prop-types */
import contact from "./../../../../assets/icons/medical-center/users/user-details/ContactInformation.svg";
import editIcon from "./../../../../assets/icons/medical-center/users/user-details/true.svg";
import { useDetailsUsers } from "./../../../../pages/manager_center/users/user-details/UserDetailsState";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useEditUserMutation } from "../../../../services/manager_center/user/user_details/UserDetailsSlice";

function ContactInformation({ data,setData  }) {
  const [editUser] = useEditUserMutation();

  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(
    JSON.parse(JSON.stringify(data.telecom))
  );


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
    const newData = {
      ...data,
      telecom: form,
    };
    setEditedData(newData);
    setData(newData); 

    try {
      await editUser(newData);
      console.log('تم تحديث البيانات بنجاح');
    } catch (error) {
      console.error('حدث خطأ أثناء تحديث البيانات', error);
    }

    setIsEditing(false);
    setOpen(false);
  };


  const { isLoading, isSuccess } = useDetailsUsers();

  

  return (
    <>
      {isSuccess && !isLoading && (
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
              <img
                src={editIcon}
                alt="Edit"
                className="ml-2 cursor-pointer"
                onClick={handleClickOpen}
              />
            </div>
            <h3 className="text-xl text-bgtitle">معلومات التواصل</h3>
          </div>

          
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle className="text-center ">
              <span className=" text-4xl text-blue-700">
                {"المعلومات المتاحة"}
              </span>
            </DialogTitle>
            <DialogContent className="p-4">
              { (
                <div dir="rtl" className="grid grid-cols-2 gap-11 mt-5">
                  {form.map((card, index) => (
                    <div key={index} dir="ltr">
                      <p className="text-right">{card.system}</p>
                      <TextField
                        variant="outlined"
                        value={card.value}
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
              ) }
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

export default ContactInformation;
