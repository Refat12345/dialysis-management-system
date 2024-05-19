/* eslint-disable no-unused-vars */
import patientCount from "./../../../assets/icons/medical-center/setting/patientCount.svg";
import doctorCount from "./../../../assets/icons/medical-center/setting/doctorCount.svg";
import chaiCount from "./../../../assets/icons/medical-center/setting/chaiCount.svg";
import edit from "./../../../assets/icons/medical-center/setting/edit.svg";
import { DataContext } from "./DataContext";
import { statisticMedicalInfo } from "../../../data/data";
import Cardd from "./Cardd/Cardd";
import { useState,useContext } from "react";

function Cards() {
  const { data, setData } = useContext(DataContext);

  return (
    <>
      <div className="flex flex-col bg-white border border-indigo-300 rounded-xl ">

        <div className="flex flex-row items-center justify-between w-full">
          <span className=" text-lg text-blue700 pr-4">الاحصائيات</span>
        </div>
        <div className="grid grid-cols-3 mb-3 -mt-2">
        {data.cardData.map((card, index) => (
            <Cardd
              key={index}
              data={card}
              statistic={data.statisticMedicalInfo[card.statistic]}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Cards;
