/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */

import { useState } from "react";
import {  PageLoader, PaginationComponent, Search  } from "../../../components"

import GridView from "./sections/GridView";
import { useEffect } from "react";
import { useGetMedicalCentersQuery } from "../../../services/public/medical_centers/ShowMedicalCentersSlice";

const MedicalCentersPage = () => {
   const{data , isSuccess , isError , isLoading } = useGetMedicalCentersQuery()
  const [medicalCenters,setMedicalCenters] = useState([]);
  const [searchMedicalCenters,setSearchMedicalCenters] = useState([]);
  const [inputValue,setInputValue] = useState("")

  useEffect(()=>{
    if(isSuccess){
      setMedicalCenters(data.medicalCenters)
    }
    
  },[isSuccess])
  
  useEffect(()=>{
    if(isSuccess) {
        setSearchMedicalCenters(data.medicalCenters);
      }
  },[isSuccess])

  useEffect(()=>{
    const searchArray = medicalCenters.filter(
      medical=>medical.centerName.toLowerCase().includes(inputValue)
    )
    setSearchMedicalCenters(searchArray);
    },[inputValue])
  const handleInputValue = (e) => {
    setInputValue(e.target.value)
  }

  const height = window.innerHeight; 
  const responsive = height > 603 ? ( height > 700 ? (height < 710 ? "mb-7 mt-8" : "mb-8 mt-10") : (height > 630 ? "mb-5 mt-7" : "mb-4 mt-6") ) :"mb-2 mt-4";
  return (
    <div dir="rtl" className={`mr-48 w-full`}>
    {
    isLoading ? <div className="flex items-center justify-center h-screen"><PageLoader/></div> : 
    isSuccess &&
    
    <div className="mx-[4%]">
        <div className="flex flex-row-reverse justify-between">
            <Search handleInputValue={handleInputValue}/>
            <p className={`text-2xl text-titleSideColor font-bold ${responsive}`}>{"مراكز غسيل الكلى"}</p>
        </div> 
        {medicalCenters.length > 1 && <PaginationComponent data={searchMedicalCenters} RenderComponent={GridView} itemsPerPage={12}/>}
    </div>
    }
</div>
  )
}

export default MedicalCentersPage
