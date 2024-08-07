/* eslint-disable react/prop-types */

import AppointmentDialog from "../../../pages/public/appointment/sections/Dialog";
import { useState } from "react";

const TableComponent = ({ shift, appointments, chairNumbers, role }) => {
  const daysOfWeek = ["السبت", "الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس"];
  const [open, setOpen] = useState(false);
  const body = useState({
    appointmentID:"",
    userID:""
  });
  
  const prepareData = (appointments, shift) => {
    const data = {};
    chairNumbers.forEach(chairNumber => {
      data[chairNumber] = {};
      daysOfWeek.forEach(day => {
        data[chairNumber][day] = { patientName: "لا يوجد", shiftID: null, appointmentID: null, chairID: chairNumber };
      });
    });

    appointments
      .filter(appointment => appointment.shiftName === shift)
      .forEach(appointment => {
        if (chairNumbers.includes(appointment.chairNumber)) {
          data[appointment.chairNumber][appointment.day] = {
            patientName: appointment.patientName || "لا يوجد",
            shiftID: appointment.shiftID,
            appointmentID: appointment.id,
            chairID: appointment.chairID
          };
        }
      });

    return data;
  };

  const data = prepareData(appointments, shift);

  const handleClick = (day, chairNumber) => {
    const appointmentData = data[chairNumber][day];
    if (role === "secretary" && appointmentData.patientName === "لا يوجد") {
      body.appointmentID = appointmentData.appointmentID
      console.log("Shift ID:", appointmentData.shiftID);
      console.log("Appointment ID:", appointmentData.appointmentID);
      console.log("Chair ID:", appointmentData.chairID);
      setOpen(true);
    }
  };

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
                  onClick={() => handleClick(day, chairNumber)}
                  className={`py-4 whitespace-nowrap font-bold text-sm text-center text-gray-500 border-r bg-primaryColor mr-2 ${role === "secretary" && data[chairNumber][day].patientName === "لا يوجد" ? " hover:bg-black hover:text-white hover:cursor-pointer transition-transform transform hover:scale-105" : ""}`}
                  key={day}
                >
                  {data[chairNumber][day].patientName}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <AppointmentDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default TableComponent;
