// /* eslint-disable react/prop-types */
// /* eslint-disable no-unused-vars */
// import Dialog from "@mui/material/Dialog";
// import React, { useState, useContext } from "react";
// import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from "@mui/material/DialogTitle";
// import { useSelector } from "react-redux";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useSendNoteMutation } from "../../../services/manager_center/patient/generalNote/GeneralNoteSlice";


// export default function SendNote({ open, setOpen ,type}) {
//     const handleClose = () => {
//       setOpen(false);
//     };
//     const user = useSelector((state) => state.user);
//     const [sendNote] = useSendNoteMutation();
  
//     const [shiftName, setShiftName] = useState("");
//     const [startTime, setStartTime] = useState("");
//     const [endTime, setEndTime] = useState("");
//     const [isLoading, setIsLoading] = useState(false); 
//     const [selectedOption, setSelectedOption] = useState(null);
//     const [noteContent, setNoteContent] = useState("");
  
//     const handleInputChange = (e, setter) => setter(e.target.value);
  
//     const handleCheckboxChange = (option) => {
//       setSelectedOption(prevOption => prevOption === option ? null : option);
//     };
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       if (!noteContent || !selectedOption) {
//         toast.error("يرجى ملء جميع الحقول");
//         return;
//       }
  
//       const noteData = {
//         noteContent,
//         category: selectedOption,
//         type: "ملاحظة"
//       };
  
//       try {
//         setIsLoading(true);
//         await sendNote(noteData).unwrap();
//         toast.success("تم إرسال الملاحظة بنجاح");
//         setOpen(false);
//       } catch (error) {
//         toast.error("حدث خطأ أثناء إرسال الملاحظة");
//       } finally {
//         setIsLoading(false);
//       }
//     };
  
//     return (
//       <>
//       <ToastContainer/>
//         <Dialog open={open} onClose={handleClose}>
//         <DialogTitle className="text-center ">
//           <span className=" text-4xl text-blue-700">{"ارسال ملاحظة"}</span>
//         </DialogTitle>
//         <DialogContent className="p-4 w-full " dir="rtl">
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4 w-96">
//                 <textarea
//                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-72"
//                   id="note-content"
//                   placeholder="أدخل النص هنا..."
//                   value={noteContent}
//                   onChange={(e) => handleInputChange(e, setNoteContent)}
//                 />
//               </div>
//               <div className="flex flex-row justify-between mb-4">
//                 <label className="inline-flex items-center mb-2">
//                   <input 
//                     type="checkbox" 
//                     className="form-checkbox text-blue-600" 
//                     checked={selectedOption === 'secretary'} 
//                     onChange={() => handleCheckboxChange('secretary')} 
//                     disabled={selectedOption && selectedOption !== 'secretary'}
//                   />
//                   <span className="mr-1">السكرتاريا</span>
//                 </label>
//                 <label className="inline-flex items-center mb-2">
//                   <input 
//                     type="checkbox" 
//                     className="form-checkbox text-green-600" 
//                     checked={selectedOption === 'doctor'} 
//                     onChange={() => handleCheckboxChange('doctor')} 
//                     disabled={selectedOption && selectedOption !== 'doctor'}
//                   />
//                   <span className="mr-1">الأطباء</span>
//                 </label>
//                 <label className="inline-flex items-center mb-2">
//                   <input 
//                     type="checkbox" 
//                     className="form-checkbox text-purple-600" 
//                     checked={selectedOption === 'nurse'} 
//                     onChange={() => handleCheckboxChange('nurse')} 
//                     disabled={selectedOption && selectedOption !== 'nurse'}
//                   />
//                   <span className="mr-1">الممرضين</span>
//                 </label>
//                 <label className="inline-flex items-center mb-2">
//                   <input 
//                     type="checkbox" 
//                     className="form-checkbox text-gray-600" 
//                     checked={selectedOption === 'patient'} 
//                     onChange={() => handleCheckboxChange('patient')} 
//                     disabled={selectedOption && selectedOption !== 'patient'}
//                   />
//                   <span className="mr-1">المرضى</span>
//                 </label>

//                 <label className="inline-flex items-center mb-2">
//                   <input 
//                     type="checkbox" 
//                     className="form-checkbox text-blue-600" 
//                     checked={selectedOption === 'admin'} 
//                     onChange={() => handleCheckboxChange('admin')} 
//                     disabled={selectedOption && selectedOption !== 'admin'}
//                   />
//                   <span className="mr-1">مدير المركز</span>
//                 </label>

             


//               </div>
//               <div className="flex justify-center w-full">
//             <button
//               type="submit"
//               className="w-1/4 text-white bg-bgbutton    font-medium rounded-lg text-sm px-5 py-2.5 text-center"
//             >
//               {isLoading ? "جارٍ الإرسال..." : "إرسال"}
//             </button>
//           </div>
//             </form>
//           </div>
//         </DialogContent>
//       </Dialog>
//       </>
    
//     );
//   }

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Dialog from "@mui/material/Dialog";
import React, { useState, useContext } from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSendNoteMutation } from "../../../services/manager_center/patient/generalNote/GeneralNoteSlice";

export default function SendNote({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };
  const user = useSelector((state) => state.user);
  const [sendNote] = useSendNoteMutation();

  const [shiftName, setShiftName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [noteContent, setNoteContent] = useState("");

  const handleInputChange = (e, setter) => setter(e.target.value);

  const handleCheckboxChange = (option) => {
    setSelectedOption((prevOption) => (prevOption === option ? null : option));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!noteContent || !selectedOption) {
      toast.error("يرجى ملء جميع الحقول");
      return;
    }

    const noteData = {
      noteContent,
      category: selectedOption,
      type: "ملاحظة",
    };

    try {
      setIsLoading(true);
      await sendNote(noteData).unwrap();
      toast.success("تم إرسال الملاحظة بنجاح");
      setOpen(false);
    } catch (error) {
      toast.error("حدث خطأ أثناء إرسال الملاحظة");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="text-center ">
          <span className=" text-4xl text-blue-700">{"ارسال ملاحظة"}</span>
        </DialogTitle>
        <DialogContent className="p-4 w-full " dir="rtl">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="mb-4 w-96">
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-72"
                  id="note-content"
                  placeholder="أدخل النص هنا..."
                  value={noteContent}
                  onChange={(e) => handleInputChange(e, setNoteContent)}
                />
              </div>
              <div className="flex flex-row justify-between mb-4">
                {user.role === "secretary" && (
                  <>
                    <label className="inline-flex items-center mb-2">
                      <input
                        type="checkbox"
                        className="form-checkbox text-blue-600"
                        checked={selectedOption === "doctor"}
                        onChange={() => handleCheckboxChange("doctor")}
                        disabled={selectedOption && selectedOption !== "doctor"}
                      />
                      <span className="mr-1">الأطباء</span>
                    </label>
                    <label className="inline-flex items-center mb-2">
                      <input
                        type="checkbox"
                        className="form-checkbox text-purple-600"
                        checked={selectedOption === "nurse"}
                        onChange={() => handleCheckboxChange("nurse")}
                        disabled={selectedOption && selectedOption !== "nurse"}
                      />
                      <span className="mr-1">الممرضين</span>
                    </label>
                    <label className="inline-flex items-center mb-2">
                      <input
                        type="checkbox"
                        className="form-checkbox text-gray-600"
                        checked={selectedOption === "patient"}
                        onChange={() => handleCheckboxChange("patient")}
                        disabled={selectedOption && selectedOption !== "patient"}
                      />
                      <span className="mr-1">المرضى</span>
                    </label>
                  </>
                )}

                {user.role === "admin" && (
                  <>
                    <label className="inline-flex items-center mb-2">
                      <input
                        type="checkbox"
                        className="form-checkbox text-blue-600"
                        checked={selectedOption === "secretary"}
                        onChange={() => handleCheckboxChange("secretary")}
                        disabled={selectedOption && selectedOption !== "secretary"}
                      />
                      <span className="mr-1">السكرتاريا</span>
                    </label>
                    <label className="inline-flex items-center mb-2">
                      <input
                        type="checkbox"
                        className="form-checkbox text-blue-600"
                        checked={selectedOption === "doctor"}
                        onChange={() => handleCheckboxChange("doctor")}
                        disabled={selectedOption && selectedOption !== "doctor"}
                      />
                      <span className="mr-1">الأطباء</span>
                    </label>
                    <label className="inline-flex items-center mb-2">
                      <input
                        type="checkbox"
                        className="form-checkbox text-purple-600"
                        checked={selectedOption === "nurse"}
                        onChange={() => handleCheckboxChange("nurse")}
                        disabled={selectedOption && selectedOption !== "nurse"}
                      />
                      <span className="mr-1">الممرضين</span>
                    </label>
                    <label className="inline-flex items-center mb-2">
                      <input
                        type="checkbox"
                        className="form-checkbox text-gray-600"
                        checked={selectedOption === "patient"}
                        onChange={() => handleCheckboxChange("patient")}
                        disabled={selectedOption && selectedOption !== "patient"}
                      />
                      <span className="mr-1">المرضى</span>
                    </label>
                  </>
                )}
              </div>
              <div className="flex justify-center w-full">
                <button
                  type="submit"
                  className="w-1/4 text-white bg-bgbutton font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  {isLoading ? "جارٍ الإرسال..." : "إرسال"}
                </button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}