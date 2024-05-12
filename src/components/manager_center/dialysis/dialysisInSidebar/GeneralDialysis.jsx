/* eslint-disable react/prop-types */

import TableHeader from '../../patient/TableHeader'
import TableRow from '../../patient/TableRow';
import { GeneralDialysisData } from '../../../../data/data';

function GeneralDialysis() {

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
  return (
    <div className="flex-grow mr-56 ml-8 h-full mt-20 bg-cardDetailsColor " dir='rtl'>


<table className="min-w-full bg-white">
          <TableHeader columns={columns} color="bg-headerTable" />

          <tbody className="text-gray-700">
            {GeneralDialysisData.map((row, index) => (
                <TableRow
                  key={index}
                  row={row}
                  index={index}
                  handleRowClick={null}
                  getRowColor={() => getRowColor(index, row.name)}
                  type={"dialysis"}
                />
              ))}
          </tbody>
          
        </table>
    
  </div>
  )
}

export default GeneralDialysis
