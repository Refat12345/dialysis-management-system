/* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
// import Dialog from "@mui/material/Dialog";
// import { useState, useContext } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from "@mui/material/DialogTitle";
// import { DataContext } from "../DataContext";
// import CustomTextField from "../../../public/textfield/CustomTextField";
// import { useUpdateChairMutation,useGetChairInCenterQuery } from "../../../../services/manager_center/setting/SettingSlice";
// import { useSelector } from "react-redux";
// import { useEffect } from "react";

// function DialogEditChair({ open, setOpen }) {
//   const [updateChair] = useUpdateChairMutation();
//   const user = useSelector((state) => state.user);

//   const [ChairData, setChairData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);

//   const centerIdString = user.centerID ? user.centerID.toString() : '14';

//   const {
//     data: chair,
//     isLoading: ischairLoading,
//     isSuccess: ischairSuccess,
//   } = useGetChairInCenterQuery(centerIdString);

//   useEffect(() => {
//     if (ischairSuccess && chair) {
//       setChairData(chair);
//       setIsLoading(false);
//       setIsSuccess(true);
//     } else if (ischairLoading) {
//       setIsLoading(true);
//       setIsSuccess(false);
//     } else {
//       setIsLoading(false);
//       setIsSuccess(false);
//     }
//   }, [ischairSuccess, ischairLoading, chair]);

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Dialog open={open} onClose={handleClose}>
//       <DialogTitle className="text-center ">
//         <span className=" text-4xl text-blue-700">{"الكراسي المتاحة"}</span>
//       </DialogTitle>
//       <DialogContent className="p-4 w-full " dir="rtl">

//       </DialogContent>
//     </Dialog>
//   );
// }

// export default DialogEditChair;
//////////////////////////////////////////////

// import Dialog from "@mui/material/Dialog";
// import { useState, useEffect } from "react";
// import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from "@mui/material/DialogTitle";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import Divider from "@mui/material/Divider";
// import { useSelector } from "react-redux";
// import { useGetChairInCenterQuery, useUpdateChairMutation } from "../../../../services/manager_center/setting/SettingSlice";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function DialogEditChair({ open, setOpen }) {
//   const user = useSelector((state) => state.user);
//   const centerIdString = user.centerID ? user.centerID.toString() : '14';

//   const {
//     data: chair,
//     isLoading: ischairLoading,
//     isSuccess: ischairSuccess,
//   } = useGetChairInCenterQuery(centerIdString);

//   const [ChairData, setChairData] = useState([]);
//   const [updateChair] = useUpdateChairMutation();

//   useEffect(() => {
//     if (ischairSuccess && chair) {
//       setChairData(chair.message);
//     }
//   }, [ischairSuccess, chair]);

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleChange = (index, field, value) => {
//     const newChairData = [...ChairData];
//     newChairData[index][field] = value;
//     setChairData(newChairData);
//   };

//   const handleSave = async () => {
//     try {
//       await Promise.all(ChairData.map(chair => updateChair(chair)));
//       toast.success("تم تحديث البيانات بنجاح!");
//     } catch (error) {
//       toast.error("فشل في تحديث البيانات.");
//     }
//   };

//   return (
//     <Dialog open={open} onClose={handleClose}>
//       <DialogTitle className="text-center">
//         <span className="text-4xl text-blue-700">{"الكراسي المتاحة"}</span>
//       </DialogTitle>
//       <DialogContent className="p-4 w-full" dir="rtl">
//         {ischairLoading ? (
//           <p>جاري التحميل...</p>
//         ) : (
//           ChairData.map((chair, index) => (
//             <div key={chair.id} className="mb-4">
//               <TextField
//                 label="رقم الكرسي"
//                 value={chair.chairNumber}
//                 onChange={(e) => handleChange(index, 'chairNumber', e.target.value)}
//                 fullWidth
//                 margin="normal"
//               />
//               <TextField
//                 label="اسم الغرفة"
//                 value={chair.roomName}
//                 onChange={(e) => handleChange(index, 'roomName', e.target.value)}
//                 fullWidth
//                 margin="normal"
//               />
//               <Divider className="my-2" />
//             </div>
//           ))
//         )}
//         <Button variant="contained" color="primary" onClick={handleSave}>
//           حفظ
//         </Button>
//       </DialogContent>
//       <ToastContainer />
//     </Dialog>
//   );
// }

// export default DialogEditChair;

/////////////////

import Dialog from "@mui/material/Dialog";
import { useState, useEffect } from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useSelector } from "react-redux";
import {
  useGetChairInCenterQuery,
  useUpdateChairMutation,
} from "../../../../services/manager_center/setting/SettingSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DialogEditChair({ open, setOpen }) {
  const user = useSelector((state) => state.user);
  const centerIdString = user.centerID ? user.centerID.toString() : "14";

  const {
    data: chair,
    isLoading: ischairLoading,
    isSuccess: ischairSuccess,
  } = useGetChairInCenterQuery(centerIdString);

  const [ChairData, setChairData] = useState([]);
  const [updateChair] = useUpdateChairMutation();

  useEffect(() => {
    if (ischairSuccess && chair) {
      setChairData(chair.message);
    }
  }, [ischairSuccess, chair]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (index, field, value) => {
    setChairData((prevState) => {
      const newChairData = [...prevState];
      newChairData[index] = { ...newChairData[index], [field]: value };
      return newChairData;
    });
  };

  const handleSave = async () => {
    try {
      const chairNumbers = ChairData.map((chair) => chair.chairNumber);
      const hasDuplicates = chairNumbers.some(
        (number, index) => chairNumbers.indexOf(number) !== index
      );

      if (hasDuplicates) {
        throw new Error("يوجد كرسي بنفس الرقم مسبقًا.");
      }

      const payload = {
        data: ChairData.map(({ id, chairNumber, roomName }) => ({
          id,
          chairNumber:
            typeof chairNumber === "string"
              ? parseInt(chairNumber, 10)
              : chairNumber,
          roomName,
        })),
      };
      const response = await updateChair(payload);
      if (response.error) {
        throw new Error(response.error.data.message || "Unknown error");
      }
      toast.success("تم تحديث البيانات بنجاح!");
    } catch (error) {
      console.error("Error updating chair data:", error);
      toast.error(`فشل في تحديث البيانات: ${error.message}`);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle className="text-center">
        <span style={{ color: "#e0bf7d" }} className="text-4xl ">
          {"الكراسي المتاحة"}
        </span>
      </DialogTitle>
      <DialogContent className="p-4 w-full" dir="rtl">
        {ischairLoading ? (
          <p>جاري التحميل...</p>
        ) : (
          ChairData.map((chair, index) => (
            <div key={chair.id} className="mb-4">
              <TextField
                label="رقم الكرسي"
                value={chair.chairNumber}
                onChange={(e) =>
                  handleChange(index, "chairNumber", e.target.value)
                }
                fullWidth
                margin="normal"
              />
              <TextField
                label="اسم الغرفة"
                value={chair.roomName}
                onChange={(e) =>
                  handleChange(index, "roomName", e.target.value)
                }
                fullWidth
                margin="normal"
              />
              <Divider className="my-4 " style={{ borderWidth: "1px" }} />
            </div>
          ))
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "16px",
          }}
        >
          <Button
            style={{ color: "black", backgroundColor: "#d4b77c" }}
            variant="contained"
            onClick={handleSave}
          >
            حفظ
          </Button>
        </div>
      </DialogContent>
      <ToastContainer />
    </Dialog>
  );
}

export default DialogEditChair;
