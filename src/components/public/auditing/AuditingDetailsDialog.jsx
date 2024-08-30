/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { translateMedicalTerms } from '../../../data/data'; 
import { useGetMedicineAuditQuery } from '../../../services/manager_center/auditing/AuditingSlice';
import PageLoader from '../loader/PageLoader';

const AuditingDetailsDialog = ({ oldData, newData, details, operation }) => {
  const [oldResponse, setOldResponse] = useState(oldData);
  const [newResponse, setNewResponse] = useState(newData);
    console.log(operation);
    
  const { data: oldApiResponse ,isLoading:load  } = useGetMedicineAuditQuery(oldData, {
    skip: operation !== 'medicineTakenID',
  });
  const { data: newApiResponse ,isLoading  } = useGetMedicineAuditQuery(newData, {
    skip: operation !== 'medicineTakenID',
  });



  useEffect(() => {
    if (operation === 'medicineTakenID') {
      if (oldApiResponse) setOldResponse(oldApiResponse);
      if (newApiResponse) setNewResponse(newApiResponse);
    }
  }, [oldApiResponse, newApiResponse, operation]);

    if(isLoading || load) {
    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="mr-48">
                <PageLoader />
            </div>
        </div>
    ); 
}
  return (
    <div>
        <div dir="rtl" className="flex flex-col">
        {oldApiResponse ===undefined && <>
            <div className="self-center mb-6">
            <p className="text-xl font-bold text-titleSideColor">{"تفاصيل العملية"}</p>
        </div>
        <div className="details w-80 mb-5">
            <p className="text-titleSideColor text-md mb-1">تفاصيل العملية :</p>
            <p className="font-bold">تم تعديل {translateMedicalTerms(details)}</p>
        </div>
        </>}
        <div className="oldData mb-5">
            <p className="text-titleSideColor text-md mb-1">البيانات القديمة :</p>
            {oldApiResponse != undefined ?<div className='flex'>
            <p className="font-bold">{oldResponse.name}</p>
            <p className="font-bold">:{oldResponse.value}</p>
            </div>:
            <p className="font-bold">{oldResponse}</p>
            }
        </div>
        <div className="newData">
            <p className="text-titleSideColor text-md mb-1">البيانات الجديدة :</p>
            {newApiResponse != undefined ? <div className='flex'>
            <p className="font-bold">{newResponse.name}</p>
            <p className="font-bold">:{newResponse.value}</p>
            </div>:<p className="font-bold">{newResponse}</p>
            }
        </div>
    </div>
    </div>
);
};

export default AuditingDetailsDialog;
