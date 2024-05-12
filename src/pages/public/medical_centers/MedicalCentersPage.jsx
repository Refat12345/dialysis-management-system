/* eslint-disable react/jsx-key */

import {  PaginationComponent, Search  } from "../../../components"
import { medicalCenters } from "../../../data/data";
import GridView from "./sections/GridView";

const MedicalCentersPage = () => {




  const height = window.innerHeight; 
  const responsive = height > 603 ? ( height > 700 ? (height < 710 ? "mb-7 mt-8" : "mb-8 mt-10") : (height > 630 ? "mb-5 mt-7" : "mb-4 mt-6") ) :"mb-2 mt-4";

  return (
    <div dir="rtl" className={`mr-48 w-full`}>
    <div className="mx-[4%]">
        <div className="flex flex-row-reverse justify-between">
            <Search/>
            <p className={`text-2xl text-titleSideColor font-bold ${responsive}`}>{"مراكز غسيل الكلى"}</p>
        </div> 
        <PaginationComponent data={medicalCenters.medicalCenters} RenderComponent={GridView} itemsPerPage={12}/>
    </div>
</div>
    
  )
}

export default MedicalCentersPage
