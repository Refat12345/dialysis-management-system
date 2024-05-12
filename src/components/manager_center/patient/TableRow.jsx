/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import patient from "../../../assets/icons/medical-center/patient/patient.svg";
import down from "../../../assets/icons/medical-center/patient/chevron-down.svg";
import ChevronIcon from "../../../assets/icons/public/chevron-left.svg"
import { useFormatDate } from "../../../utils/DateUtils";
import AlertDialog from "../../public/dialog/Dialog";
import AuditingDetailsDialog from "../../public/auditing/AuditingDetailsDialog";

function TableRow({ row, index, handleRowClick, getRowColor ,type}) {
    const object = {
      connectOne :Object.values(row)[0],
      connectTow :Object.values(row)[1],
      connectThree :Object.values(row)[2],
      connectFour :Object.values(row)[3],
      connectFive :Object.values(row)[4],
      connectSix :Object.values(row)[5],
    } 
  
    return (
      <tr
        className={`text-right border-b ${getRowColor(index)}`}
        onClick={() => handleRowClick(object.connectOne)}
      >
        <td className="py-3 px-4 w-48">
          <div>
            {
            type != "auditing" && <img
              className="inline-block w-6 h-6 mr-0"
              src={patient}
              alt="Patient"
            />
            }
            <h1 className="inline-block pr-2 pl-0 ml-0">{object.connectOne}</h1>
          </div>
        </td>
        <td className={`py-3 px-4`}>{type === "auditing" ? useFormatDate(object.connectTow) : object.connectTow}</td>
        <td className="py-3 px-4">{object.connectThree}</td>
        <td className="py-3 px-4">{object.connectFour}</td>
        {
            (object.connectFive != undefined && type != "auditing" )&& 
            <td className={`py-3 w-48 ${type === "dialysis" ? "pr-6":""}`} dir="ltr">
              {object.connectFive}
            </td>
          }
          {
          ( object.connectSix != undefined &&  type != "auditing" )&& 
            <td className="py-3 w-48" dir="ltr">
              {object.connectSix}
            </td>
          }
        {type != "dialysis" &&
        <td className="py-3 pr-12">
        {type === "auditing" ?
        <div className= {`border border-gray-300 rounded-md w-7 pr-[3px] hover:cursor-pointer ${index % 2 === 0 ? "hover:bg-gray-200" :"hover:bg-gray-300"}`}>
            <AlertDialog renderComponent={<img className="w-5 h-5" src={ChevronIcon} alt="AUDIT" />}
                        contentComponent={<AuditingDetailsDialog oldData={object.connectFive} newData={object.connectSix} details={"تم تعديل الوزن الجاف"}/>}
                        titleButton={"رجوع"} 
            />
        </div>:
          <img className="w-5 h-5 pr-18 -ml-4" src={down} alt="Patient" />}
      </td>}
      </tr>
    );
  }

  export default TableRow;





