/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useParams } from "react-router-dom";
import { useState } from "react";
import { AlertDialog, Medicine } from "../../../../../components"
import EditPrescriptionsDialog from "../../../../secretariat/patient/prescriptions/edit_prescriptions/EditPrescriptionsDialog";
import Cookies from "js-cookie"

const Prescriptions = ({ prescriptions, height }) => {
  const { patientName } = useParams();
  const { status } = useParams();
  const [open, setOpen] = useState(false);
  const title = {
    name: "اسم الدواء",
    startDate: "تاريخ بدء أخذ الدواء",
    endDate: "تاريخ نهاية أخذ الدواء",
    note: "تعليمات عن الدواء"
  };

  const responsive = height > 600 ? (height > 700 ? "mb-5" : "mb-3") : "mb-1";

  return (
    <div className={`bg-cardDetailsColor p-4 pb-1 pt-6 shadow-inner shadow-gray-200 rounded-lg ${responsive}`}>
      {prescriptions.medicines.map((medicine, index) => {
        return Cookies.get("role") === "secretary" ? (
          <div
          key={index}
            onClick={() => {
              if (status === "acceptable") {
                setOpen(false);
              }
            }}
            className={`${status === "acceptable" && "hover:cursor-pointer"}`}
          >
            <AlertDialog
              state={open}
              contentComponent={
                <EditPrescriptionsDialog
                  patientId={patientName}
                  medicine={medicine}
                  prescriptionId={prescriptions.prescriptionID}
                  open={open}
                  setOpen={setOpen}
                />
              }
              renderComponent={
                <Medicine
                  key={index}
                  title={title}
                  medicine={medicine}
                  doctor={prescriptions.doctor}
                />
              }
            />
          </div>
        ) : (
          <Medicine
            key={index}
            title={title}
            medicine={medicine}
            doctor={prescriptions.doctor}
          />
        );
      })}
    </div>
  );
};

export default Prescriptions;
