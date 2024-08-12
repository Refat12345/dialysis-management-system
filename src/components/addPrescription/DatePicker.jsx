/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { useAddPrescriptionState } from "./AddPrescriptionState";

const DatePickerr = ({label ,contact , index}) => {
  const { state, updateState } = useAddPrescriptionState();


  
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = [
        'كانون الثاني', 'شباط', 'آذار', 'نيسان', 'أيار', 'حزيران',
        'تموز', 'آب', 'أيلول', 'تشرين الأول', 'تشرين الثاني', 'كانون الأول'
      ];
    const years = Array.from({ length: 77 }, (_, i) => 2024 + i);

    return (
      <>
       {
        label === "تاريخ  بدء اخذ الدواء" ? <div className="flex flex-col items-start justify-center">
        <label htmlFor="drugStartDate" className="text-lg mb-2">
          {label}
        </label>
        <div className="flex space-x-3">
          <select
            id="day"
            className="form-select px-4 py-3 rounded-md border-2 border-gray-300"
            value={contact.dayStart}
            onChange=
            {(val) => {
              state.updateContactInfo(index, { dayStart: val.target.value });
            }}
            
          >
            <option value="">يوم</option>
            {days.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
          <select
            id="month"
            className="form-select px-4 py-3 rounded-md border-2 border-gray-300"
            value={contact.monthStart}
            onChange=
            {(val) => {
              state.updateContactInfo(index, { monthStart: val.target.value });
            }}
         
          >
            <option value="">شهر</option>
            {months.map((m, index) => (
              <option key={m} value={index + 1}>{m}</option>
            ))}
          </select>
          <select
            id="year"
            className="form-select px-4 py-3 rounded-md border-2 border-gray-300"
            value={contact.yearStart}
            onChange=
            {(val) => {
              state.updateContactInfo(index, { yearStart: val.target.value });
            }}
            
          >
            <option value="">سنة</option>
            {years.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>
       
      </div> 
      :
      <div className="flex flex-col items-start justify-center">
      <label htmlFor="drugStartDate" className="text-lg mb-2">
        {label}
      </label>
      <div className="flex space-x-3">
        <select
          id="day"
          className="form-select px-4 py-3 rounded-md border-2 border-gray-300"
          value={contact.dayEnd}
          onChange= {(val) => {
            state.updateContactInfo(index, { dayEnd: val.target.value });
          }}
        >
          <option value="">يوم</option>
          {days.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
        <select
          id="month"
          className="form-select px-4 py-3 rounded-md border-2 border-gray-300"
          value={contact.monthEnd}
          onChange= {(val) => {
            state.updateContactInfo(index, { monthEnd: val.target.value });
          }}
        >
          <option value="">شهر</option>
          {months.map((m, index) => (
            <option key={m} value={index + 1}>{m}</option>
          ))}
        </select>
        <select
          id="year"
          className="form-select px-4 py-3 rounded-md border-2 border-gray-300"
          value={contact.yearEnd}
          onChange= {(val) => {
            state.updateContactInfo(index, { yearEnd: val.target.value });
          }}
        >
          <option value="">سنة</option>
          {years.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>
     
    </div> 
      }
       
      </>
     
      
      );
};

export default DatePickerr;
