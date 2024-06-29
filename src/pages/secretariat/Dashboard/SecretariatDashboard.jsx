import {
  CustomButton,
  
} from "../../../components";
/* eslint-disable no-unused-vars */


import React, { useState, useEffect } from "react";
import { useUsers } from "../../manager_center/users/users-list/UserListState";
import s1 from "./../../../assets/icons/s1.svg";
import {
  bodyMeduimStyle,
  bodySmallStyle,
  heightSmall,
} from "../../../utils/StyleUtils";
import { PatientProvider } from "../../manager_center/patient/patient_list/PaitientListState";
import { usePatient } from "../../manager_center/patient/patient_list/PaitientListState";
const SecretariatDashboard = () => {
  const { patientData, isLoading, isSuccess ,filteredDataSearch,setSearchTerm  } = usePatient();
   console.log(patientData)
  return (
        <>
        {
          isSuccess && !isLoading && patientData && (
            <div className="flex-grow mr-56 ml-8" dir="rtl">
            <div className="flex justify-start mt-3 text-slate-500 text-2xl">المرضى المقبولين</div>
  
              <div
                className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-6"
                dir="rtl"
              >
                {patientData[0].map((patient) => (
                  <div key={patient.id}>
                    <div className=" bg-white w-full flex flex-col justify-start rounded-lg ">
                      <div className="cardOneHeader flex flex-row justify-start ">
                        <img src={s1} />
                        <h5 className="text-textButtonColor text-xl mr-2 mt-1">
                          {patient.fullName}
                        </h5>
                      </div>
    
                      <div className="cardGrid grid grid-cols-2 ">
                        <div className="flex flex-row justify-start ">
                          <img className="w-5 h-5" src={s1} />
    
                          <h4 className="text-right mr-2">العنوان</h4>
                        </div>
                        <h4 className="text-right">{patient.city}</h4>
    
                        <div className="flex flex-row justify-start mt-2">
                          <img className="w-5 h-5" src={s1} />
    
                          <h4 className="text-right mr-2">رقم التواصل</h4>
                        </div>
                        <h4 className="text-right">{patient.contactNumber}</h4>
                      </div>
    
                      <div className="flex justify-end mt-3 ml-5 mb-4">
                        <CustomButton
                          variant="solid"
                          onClick={() => {}}
                          className={`bg-blue-800 text-white h-8 transition-all font-semibold ${bodyMeduimStyle} `}
                          title={
                            <div className="flex items-center justify-center">
                              <span className={`${bodySmallStyle}`}>
                                اعطاء موعد
                              </span>
                              <div className="lg:w-2 md:w-2 w-1"></div>
                            </div>
                          }
                        />
    
                        <CustomButton
                          variant="solid"
                          onClick={() => {}}
                          className={`bg-bgbutton text-white h-8 transition-all font-semibold ${bodyMeduimStyle} mr-2`}
                          title={
                            <div className="flex items-center justify-center">
                              <span className={`${bodySmallStyle}`}>
                                اضافة الى قائمة الانتظار
                              </span>
                              <div className="lg:w-2 md:w-2 w-1"></div>
                            </div>
                          }
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        }
        
        </>
  );
};


export default SecretariatDashboard;
