// /* eslint-disable no-unused-vars */
// import Dialog from "@mui/material/Dialog";
// import React, { useState } from "react";

// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from "@mui/material/DialogTitle";
// function DialogContactCenter({ open, setOpen }) {
//     const handleClose = () => {
//         setOpen(false);
//       };
//     const [farmManager, setFarmManager] = useState('');
//     const [charityAssociation, setCharityAssociation] = useState('');
//     const [farmAddress, setFarmAddress] = useState('');
  
//     // دالة للتعامل مع تغييرات الإدخال
//     const handleInputChange = (e, setter) => setter(e.target.value);
  
//     // دالة للتعامل مع إرسال النموذج
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       // هنا يمكن إضافة الكود للتعامل مع بيانات النموذج
//       console.log({ farmManager, charityAssociation, farmAddress });
//     };
//   return (
//     <Dialog open={open} onClose={handleClose}>
//     <DialogTitle className="text-center ">
//       <span className=" text-4xl text-blue-700">{"صندوق العافية المركزي"}</span>
//     </DialogTitle>
//     <DialogContent className="p-4 w-full " dir="rtl">
//     <div className="flex flex-col items-center justify-center p-4">
    
//       <form className="w-full max-w-lg" onSubmit={handleSubmit}>
//         <div className="mb-4 w-96">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="farm-manager">
//             مدير المركز:
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="farm-manager"
//             type="text"
//             placeholder=""
//             value={farmManager}
//             onChange={(e) => handleInputChange(e, setFarmManager)}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="charity-association">
//             الجمعية الخيرية  التابع لها المركز :
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="charity-association"
//             type="text"
//             placeholder=""
//             value={charityAssociation}
//             onChange={(e) => handleInputChange(e, setCharityAssociation)}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="farm-address">
//             عنوان المركز:
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="farm-address"
//             type="text"
//             placeholder=""
//             value={farmAddress}
//             onChange={(e) => handleInputChange(e, setFarmAddress)}
//           />
//         </div>
//         <div className="flex items-center justify-center">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             حفظ
//           </button>
//         </div>
//       </form>
//     </div>
//     </DialogContent>
//   </Dialog>
//   )
// }

// export default DialogContactCenter
import React, { useContext, useState } from 'react';
import { DataContext } from '../DataContext';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

function DialogContactCenter({ open, setOpen }) {
  // const { data, setData } = useContext(DataContext);
  // const [farmManager, setFarmManager] = useState(data.centerName);
  // const [charityAssociation, setCharityAssociation] = useState(data.organization);
  // const [farmAddress, setFarmAddress] = useState(data.location);

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const handleInputChange = (e, setter) => setter(e.target.value);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setData({ ...data, centerName: farmManager, organization: charityAssociation, location: farmAddress });
  //   setOpen(false);
  // };

  return (
    <>
    </>
    // <Dialog open={open} onClose={handleClose}>
    //   <DialogTitle className="text-center ">
    //     <span className=" text-4xl text-blue-700">{"صندوق العافية المركزي"}</span>
    //   </DialogTitle>
    //   <DialogContent className="p-4 w-full " dir="rtl">
    //     <div className="flex flex-col items-center justify-center p-4">
    //       <form className="w-full max-w-lg" onSubmit={handleSubmit}>
    //         <div className="mb-4 w-96">
    //           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="farm-manager">
    //             مدير المركز:
    //           </label>
    //           <input
    //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //             id="farm-manager"
    //             type="text"
    //             placeholder=""
    //             value={farmManager}
    //             onChange={(e) => handleInputChange(e, setFarmManager)}
    //           />
    //         </div>
    //         <div className="mb-4">
    //           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="charity-association">
    //             الجمعية الخيرية التابع لها المركز:
    //           </label>
    //           <input
    //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //             id="charity-association"
    //             type="text"
    //             placeholder=""
    //             value={charityAssociation}
    //             onChange={(e) => handleInputChange(e, setCharityAssociation)}
    //           />
    //         </div>
    //         <div className="mb-4">
    //           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="farm-address">
    //             عنوان المركز:
    //           </label>
    //           <input
    //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //             id="farm-address"
    //             type="text"
    //             placeholder=""
    //             value={farmAddress}
    //             onChange={(e) => handleInputChange(e, setFarmAddress)}
    //           />
    //         </div>
    //         <div className="flex items-center justify-center">
    //           <button
    //             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //             type="submit"
    //           >
    //             حفظ
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //   </DialogContent>

    // </Dialog>
  );
}

export default DialogContactCenter;