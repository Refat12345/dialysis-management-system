/* eslint-disable react/prop-types */

import { translateMedicalTerms } from "../../../data/data"

const AuditingDetailsDialog = ({oldData , newData , details}) => {
  return (
    <div>
       <div dir ="rtl" className='flex flex-col '>
        <div className='self-center mb-6'>
            <p className={`text-xl font-bold text-titleSideColor`}>
                {"تفاصيل العملية"}
            </p>
        </div>
        <div className="details w-80 mb-5 ">
            <p className="text-titleSideColor text-md mb-1">تفاصيل العملية :</p>
            <p className="font-bold">تم تعديل  {translateMedicalTerms(details)}</p>
        </div>
        <div className=" oldData mb-5">
            <p className="text-titleSideColor text-md mb-1">البيانات القديمة :</p>
            <p className="font-bold">{oldData}</p>
        </div>
        <div className="newData ">
            <p className="text-titleSideColor text-md mb-1">البيانات الجديدة :</p>
            <p className="font-bold">{newData}</p>
        </div>
            
        </div> 
    </div>
  )
}

export default AuditingDetailsDialog