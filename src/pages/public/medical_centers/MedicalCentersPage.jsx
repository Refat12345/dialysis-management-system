/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */

import { useState, useEffect } from "react";
import { PageLoader, PaginationComponent, Search } from "../../../components";
import GridView from "./sections/GridView";
import { useGetMedicalCentersQuery } from "../../../services/public/medical_centers/ShowMedicalCentersSlice";
import { useSelector } from "react-redux";

const MedicalCentersPage = () => {
  const { data, isSuccess, isLoading, isError } = useGetMedicalCentersQuery();
  const [medicalCenters, setMedicalCenters] = useState([]);
  const [searchMedicalCenters, setSearchMedicalCenters] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const user = useSelector((state) => state.user)
  useEffect(() => {
    if (isSuccess && data?.medicalCenters) {
      if (user.role === "superAdmin") {
        setMedicalCenters(data.medicalCenters);
        setSearchMedicalCenters(data.medicalCenters);
      } else {
        const array = data.medicalCenters.filter(medicalCenter=>
          medicalCenter.centerName != user.centerName)
        setMedicalCenters(array);
        setSearchMedicalCenters(array);
      }
    }
  }, [isSuccess, data]);
  
  useEffect(() => {
    if (inputValue.trim()) {
      const searchArray = medicalCenters.filter(medical =>
        medical.centerName.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSearchMedicalCenters(searchArray);
    } else {
      setSearchMedicalCenters(medicalCenters);
    }
  }, [inputValue, medicalCenters]);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const height = window.innerHeight;
  const responsive = height > 603 ? (height > 700 ? (height < 710 ? "mb-7 mt-8" : "mb-8 mt-10") : (height > 630 ? "mb-5 mt-7" : "mb-4 mt-6")) : "mb-2 mt-4";

  if (isLoading) {
    return (
      <div className="flex-grow md:mr-48">
        <div className="flex items-center justify-center h-screen">
          <PageLoader />
        </div>
      </div>
    );
  }

  if (isError || !isSuccess) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="font-bold text-2xl">خطأ بجلب البيانات أعد المحاولة من فضلك</p>
      </div>
    );
  }

  if (isSuccess && medicalCenters.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="font-bold text-2xl">لا يوجد مراكز طبية بعد</p>
      </div>
    );
  }
console.log(searchMedicalCenters);
  return (
    <div dir="rtl" className={`mr-48 w-full`}>
      <div className="mx-[4%]">
        <div className="flex flex-row-reverse justify-between">
          <Search handleInputValue={handleInputValue} />
          <p className={`text-2xl text-titleSideColor font-bold ${responsive}`}>{"مراكز غسيل الكلى"}</p>
        </div>
        {searchMedicalCenters.length > 0 && <PaginationComponent data={searchMedicalCenters} RenderComponent={GridView} itemsPerPage={12} />}
      </div>
    </div>
  );
};

export default MedicalCentersPage;
