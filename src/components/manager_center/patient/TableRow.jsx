/* eslint-disable react/prop-types */
import patient from "../../../assets/icons/medical-center/patient/patient.svg";
import down from "../../../assets/icons/medical-center/patient/chevron-down.svg";

function TableRow({ row, index, handleRowClick, getRowColor }) {
    return (
      <tr
        className={`text-right border-b ${getRowColor(index)}`}
        onClick={() => handleRowClick(row.name)}
      >
        <td className="py-3 px-4 w-48">
          <div>
            <img
              className="inline-block w-6 h-6 mr-0"
              src={patient}
              alt="Patient"
            />
            <h1 className="inline-block pr-2 pl-0 ml-0">{row.name}</h1>
          </div>
        </td>
        <td className="py-3 px-4">{row.nationality}</td>
        <td className="py-3 px-4">{row.age}</td>
        <td className="py-3 px-4">{row.area}</td>
        <td className="py-3 w-48" dir="ltr">
          {row.phone}
        </td>
        <td className="py-3 pr-6">
          <img className="w-5 h-5 pr-18 -ml-4" src={down} alt="Patient" />
        </td>
      </tr>
    );
  }

  export default TableRow;