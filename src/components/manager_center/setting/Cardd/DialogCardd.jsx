/* eslint-disable react/prop-types */
import Dialog from "@mui/material/Dialog";
import { useState, useContext } from "react";

import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { DataContext } from "../DataContext";
function DialogCardd({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };
  const { data, setData } = useContext(DataContext);
  const [farmManager, setFarmManager] = useState(data.centerName);
  const [charityAssociation, setCharityAssociation] = useState(
    data.organization
  );

  const handleInputChange = (e, setter) => setter(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({
      ...data,
      centerName: farmManager,
      organization: charityAssociation,
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle className="text-center ">
        <span className=" text-4xl text-blue-700">{"اضافة كرسي"}</span>
      </DialogTitle>
      <DialogContent className="p-4 w-full " dir="rtl">
        <div className="flex flex-col items-center justify-center p-4">
          <form className="w-full max-w-lg" onSubmit={handleSubmit}>
            <div className="mb-4 w-96">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="farm-manager"
              >
                رقم القاعة:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="farm-manager"
                type="text"
                placeholder=""
                value={farmManager}
                onChange={(e) => handleInputChange(e, setFarmManager)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="charity-association"
              >
                رقم الكرسي:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="charity-association"
                type="text"
                placeholder=""
                value={charityAssociation}
                onChange={(e) => handleInputChange(e, setCharityAssociation)}
              />
            </div>

            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                حفظ
              </button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DialogCardd;
