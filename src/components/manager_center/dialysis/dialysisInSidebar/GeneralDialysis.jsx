/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import TableHeader from '../../patient/TableHeader'
import TableRow from '../../patient/TableRow';
import down from "../../../../assets/icons/medical-center/patient/chevron-down.svg";
import { useNavigate } from "react-router-dom";
import { dialysisRoute,dialysisDetailsRoute } from '../../../../data/data';
import { useGeneralDialysis } from './GeneralDialysisState';
function GeneralDialysis({data}) {
  const navigate = useNavigate();



  const { userData, isLoading, isSuccess ,selectedYearOption, handleSelectYearChange,selectedMonthOption,handleSelectMonthChange} = useGeneralDialysis();
  if (isLoading || !userData || !userData.dialysisSessions) {
    return <div>جاري تحميل البيانات...</div>;
  }
  
  const filteredData = data.map(item => ({
    Name: item.patientName,
    nurse: item.nurseName,
    date: item.sessionStartTime.split(' ')[0],
    time: item.sessionStartTime.split(' ')[1].slice(0, 5),
    chair: item.chair,
    roomName: item.roomName,
  }));
  

  const columns = [
    { key: 'name', title: 'اسم المريض' },
    { key: 'gender', title: 'اسم الممرض' },
    { key: 'birth', title: 'التاريخ' },
    { key: 'location', title: 'التوقيت' },
    { key: 'phone', title: 'الكرسي' },
    { key: 'room', title: 'القاعة' },


  ];
  const getRowColor = (index) => {
   
    return index % 2 === 0 ? "bg-firstRow" : "bg-secondRow";
  };




  const handleRowClick = (userId) => {
    navigate(`${dialysisDetailsRoute.replace(':id', userId)}`);
  };

  return (
    <>
    {
      isSuccess && !isLoading && userData && (

        <div className="flex-grow overflow-x-auto mr-56 ml-8 h-full mt-2 min-h-customAbove600" dir="rtl">
        <input
          dir="rtl"
          type="text"
          placeholder="البحث"
          className="bg-search mt-5 text-right w-1/4 p-2.5 h-10 text-gray-500 border rounded-full shadow-sm outline-none appearance-none focus:border-indigo-600"
        />

        <div className="flex justify-between mb-5 mt-5">
          <h2 className="text-customPurple text-customSize">جلسات الغسيل</h2>
          

          <div className="relative w-1/5 ">

          <select
              className="bg-search text-right w-full p-2.5 text-gray-500 border rounded-full shadow-sm outline-none appearance-none focus:border-indigo-600"
              value={selectedYearOption}
              onChange={handleSelectYearChange}
            >
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
              <option>2027</option>
              <option>2028</option>
              <option>2029</option>


            </select>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <img className="w-5 h-5 " src={down} alt="Patient" />
            </div>

          </div>

          <div className="relative w-1/5 ">

          <select
              className="bg-search text-right w-full p-2.5 text-gray-500 border rounded-full shadow-sm outline-none appearance-none focus:border-indigo-600"
              value={selectedMonthOption}
              onChange={handleSelectMonthChange}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>


            </select>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <img className="w-5 h-5 " src={down} alt="Patient" />
            </div>

          </div>

        </div>
<table className="min-w-full bg-white">
          <TableHeader columns={columns} color="bg-headerTable" />

          <tbody className="text-gray-700">
            {filteredData.map((row, index) => (
                <TableRow
                  id={data[index].id}
                  key={index}
                  row={row}
                  index={index}
                  handleRowClick={handleRowClick}
                  getRowColor={() => getRowColor(index, row.name)}
                  type={"dialysis"}
                />
              ))}
          </tbody>
          
        </table>
    </div>
  // </div>
      )
    }
    
    </>

    
  )
}

export default GeneralDialysis
