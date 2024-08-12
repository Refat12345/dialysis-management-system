/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import AppointmentDialog from "../../../pages/public/appointment/sections/Dialog";
import { useState, useEffect, useMemo } from "react";

const TableComponent = ({ shift, appointments, chairNumbers, role, searchTerm ,patientID }) => {
  const daysOfWeek = ["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"];
  const [open, setOpen] = useState(false);
  const [body, setBody] = useState({
    appointmentID: "",
    userID: patientID
  });
  const [highlightedCells, setHighlightedCells] = useState({});

  const updateState = (newValues) => {
    setBody((prevState) => ({
      ...prevState,
      ...newValues,
    }));
  };

  const data = useMemo(() => {
    const preparedData = {};
    chairNumbers.forEach(chairNumber => {
      preparedData[chairNumber] = {};
      daysOfWeek.forEach(day => {
        preparedData[chairNumber][day] = { patientName: "لا يوجد", shiftID: null, appointmentID: null, chairID: chairNumber };
      });
    });

    appointments.forEach(appointment => {
      if (chairNumbers.includes(appointment.chairNumber)) {
        preparedData[appointment.chairNumber][appointment.day] = {
          patientName: appointment.patientName || "لا يوجد",
          shiftID: appointment.shiftID,
          appointmentID: appointment.id, 
          chairID: appointment.chairID
        };
      }
    });

    return preparedData;
  }, [appointments, shift, chairNumbers]);
  
  
  const handleClick = (day, chairNumber) => {


    const appointmentData = data[chairNumber][day];
    if (role === "secretary" && appointmentData.patientName === "لا يوجد") {
      console.log(appointmentData.appointmentID);
      
      updateState({ appointmentID: appointmentData.appointmentID });
      setOpen(true);
    }
  };

  useEffect(() => {
    const newHighlightedCells = {};
    if (searchTerm.trim() !== "") {
      chairNumbers.forEach(chairNumber => {
        daysOfWeek.forEach(day => {
          if (data[chairNumber][day].patientName.includes(searchTerm)) {
            if (!newHighlightedCells[chairNumber]) {
              newHighlightedCells[chairNumber] = {};
            }
            newHighlightedCells[chairNumber][day] = true;
          }
        });
      });
    }
    setHighlightedCells(newHighlightedCells);
  }, [searchTerm, data]);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="py-3 text-sm font-bold text-titleColor border-r text-center bg-appointmentColor">
              كرسي - يوم
            </th>
            {daysOfWeek.map((day, index) => (
              <th key={index} scope="col" className="py-3 bg-bgSideButton text-sm font-bold text-gray-500 border-r text-center">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {chairNumbers.map((chairNumber, rowIndex) => (
            <tr key={rowIndex}>
              <td className="py-3 whitespace-nowrap text-md font-bold text-titleColor border-r text-center bg-primaryColor">
                {chairNumber}
              </td>
              {daysOfWeek.map(day => (
                <td
                  onClick={() =>patientID !=undefined && handleClick(day, chairNumber)}
                  className={`py-4 whitespace-nowrap font-bold text-sm text-center text-gray-500 border-r bg-primaryColor mr-2 ${role === "secretary" && data[chairNumber][day].patientName === "لا يوجد" ? `${patientID !=undefined ? " hover:bg-black hover:text-white hover:cursor-pointer transition-transform transform hover:scale-105":""}` : ""} ${highlightedCells[chairNumber] && highlightedCells[chairNumber][day] ? "bg-titleColor text-white" : ""}`}
                  key={day}
                >
                  {data[chairNumber][day].patientName}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <AppointmentDialog open={open} setOpen={setOpen} body={body} />
    </div>
  );
};

export default TableComponent;
