/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import patient from "../../../assets/icons/medical-center/patient/patient.svg";
import down from "../../../assets/icons/medical-center/patient/chevron-down.svg";

function TableRow({ row, index, handleRowClick, getRowColor }) {
    const object = {
      connectOne :Object.values(row)[0],
      connectTow :Object.values(row)[1],
      connectThree :Object.values(row)[2],
      connectFour :Object.values(row)[3],
      connectFive :Object.values(row)[4],
    } 
  
    return (
      <tr
        className={`text-right border-b ${getRowColor(index)}`}
        onClick={() => handleRowClick(object.connectOne)}
      >
        <td className="py-3 px-4 w-48">
          <div>
            <img
              className="inline-block w-6 h-6 mr-0"
              src={patient}
              alt="Patient"
            />
            <h1 className="inline-block pr-2 pl-0 ml-0">{object.connectOne}</h1>
          </div>
        </td>
        <td className="py-3 px-4">{object.connectThree}</td>
        <td className="py-3 px-4">{object.connectTow}</td>
        <td className="py-3 px-4">{object.connectFive}</td>
        <td className="py-3 w-48" dir="ltr">
          {object.connectFour}
        </td>
        <td className="py-3 pr-6">
          <img className="w-5 h-5 pr-18 -ml-4" src={down} alt="Patient" />
        </td>
      </tr>
    );
  }

  export default TableRow;





