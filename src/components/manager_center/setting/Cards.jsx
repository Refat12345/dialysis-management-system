/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import patientCount from "./../../../assets/icons/medical-center/setting/patientCount.svg";
import doctorCount from "./../../../assets/icons/medical-center/setting/doctorCount.svg";
import chaiCount from "./../../../assets/icons/medical-center/setting/chaiCount.svg";
import edit from "./../../../assets/icons/medical-center/setting/edit.svg";
import { DataContext } from "./DataContext";
import { statisticMedicalInfo } from "../../../data/data";
import { useState } from "react";
import Cardd from "./Cardd/Cardd";
import { useSelector } from "react-redux";
import DialogEditChair from "./Cardd/DialogEditChair";

function Cards({ data }) {
  const user = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col bg-white border border-indigo-300 rounded-xl ">
        <div className="flex flex-row items-center justify-between w-full">
          <span className=" text-lg text-blue700 pr-4">الاحصائيات</span>
          {user.role === "secretary" && (
            <button
              onClick={() => setOpen(true)}
              className=" h-9 border-2 p-4 hover:bg-slate-300 text-black font-bold py-1 px-4 rounded flex items-center ml-10 mt-2"
            >
              <img src={edit} className="w-5 h-5 mr-2 ml-2" alt="Edit" />
              {"تعديل"}
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   mb-3 -mt-2">
          <Cardd
            icon={doctorCount}
            title={"اجمالي الاطباء"}
            data={data.totalDoctors}
          />
          <Cardd
            icon={patientCount}
            title={"اجمالي الممرضين"}
            data={data.totalNurses}
          />

          <Cardd
            icon={chaiCount}
            title={"اجمالي الكراسي"}
            data={data.totalChairs}
          />
        </div>
        <DialogEditChair open={open} setOpen={setOpen} />
      </div>
    </>
  );
}

export default Cards;
